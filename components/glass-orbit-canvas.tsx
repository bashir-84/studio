"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

type Props = { progress: number; reduced: boolean };

export function GlassOrbitCanvas({ progress, reduced }: Props) {
  const mount = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const node = mount.current;
    if (!node) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0.35, 0.05, 16);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    node.appendChild(renderer.domElement);

    const world = new THREE.Group();
    world.rotation.set(-0.04, -0.15, -0.11);
    world.position.set(0.55, -0.1, 0);
    scene.add(world);

    const geometry = new RoundedBoxGeometry(4.55, 5.45, 0.16, 10, 0.58);
    const edgeGeometry = new RoundedBoxGeometry(4.58, 5.48, 0.12, 10, 0.59);
    const specs = [
      { color: 0xd8a93a, attenuation: 0xf2c76b, base: new THREE.Vector3(-0.55, -0.42, 0.62) },
      { color: 0xee765b, attenuation: 0xff907a, base: new THREE.Vector3(0.02, -0.06, 0.12) },
      { color: 0x8871bb, attenuation: 0xb39bdd, base: new THREE.Vector3(0.62, 0.32, -0.42) },
    ];

    const planes = specs.map((spec, index) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: spec.color,
        transparent: true,
        opacity: 0.46,
        transmission: 0.6,
        thickness: 0.72,
        ior: 1.44,
        roughness: 0.16,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        attenuationColor: spec.attenuation,
        attenuationDistance: 2.4,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(spec.base);
      mesh.castShadow = true;
      mesh.renderOrder = 5 - index;
      world.add(mesh);

      const edgeMaterial = new THREE.MeshPhysicalMaterial({
        color: spec.color,
        transparent: true,
        opacity: 0.25,
        transmission: 0.2,
        roughness: 0.08,
        clearcoat: 1,
        wireframe: true,
        depthWrite: false,
      });
      const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      edge.renderOrder = 8 - index;
      mesh.add(edge);
      return { mesh, base: spec.base.clone(), index };
    });

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(19, 12),
      new THREE.ShadowMaterial({ color: 0x5c4432, transparent: true, opacity: 0.14 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -3.27, -0.2);
    floor.receiveShadow = true;
    scene.add(floor);

    scene.add(new THREE.HemisphereLight(0xfffcf3, 0xb8a68f, 2.7));
    const key = new THREE.DirectionalLight(0xffffff, 5.2);
    key.position.set(-5, 9, 10);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 30;
    scene.add(key);
    const warm = new THREE.PointLight(0xffc97a, 18, 24, 2);
    warm.position.set(-5, -1, 7);
    scene.add(warm);
    const cool = new THREE.PointLight(0xb9a7f4, 13, 20, 2);
    cool.position.set(6, 3, 5);
    scene.add(cool);

    const resize = () => {
      const width = node.clientWidth;
      const height = node.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.position.z = width < 700 ? 18.5 : 16;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(node);
    resize();

    let frame = 0;
    const tick = () => {
      const raw = reduced ? 0 : progressRef.current;
      const t = THREE.MathUtils.smoothstep(raw, 0.03, 0.96);
      const travel = [
        new THREE.Vector3(-3.5, -1.35, 1.4),
        new THREE.Vector3(0.2, 2.2, 1.0),
        new THREE.Vector3(3.6, -0.55, 0.2),
      ];
      planes.forEach(({ mesh, base, index }) => {
        mesh.position.lerpVectors(base, travel[index], t);
        const direction = index === 1 ? -1 : 1;
        mesh.rotation.x = t * (0.25 + index * 0.18) * direction;
        mesh.rotation.y = t * (0.5 + index * 0.25) * (index === 2 ? -1 : 1);
        mesh.rotation.z = t * ([ -0.28, 0.3, 0.46 ][index]);
      });
      world.rotation.y = -0.15 + t * 0.18;
      world.rotation.z = -0.11 + t * 0.08;
      world.scale.setScalar(1 + t * 0.22);
      camera.position.x = 0.35 + t * 0.35;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      geometry.dispose();
      edgeGeometry.dispose();
      planes.forEach(({ mesh }) => {
        (mesh.material as THREE.Material).dispose();
        ((mesh.children[0] as THREE.Mesh).material as THREE.Material).dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduced]);

  return <div className="webgl-glass" ref={mount} aria-hidden="true" />;
}
