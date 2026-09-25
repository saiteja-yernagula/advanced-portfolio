import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FullBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070d, 0.025);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for objects
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Star Galaxy Particle Field (1000 particles)
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f0ff), // Neon Cyan
      new THREE.Color(0x8b5cf6), // Purple
      new THREE.Color(0xec4899), // Pink
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x38bdf8), // Sky Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 80;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(starField);

    // 2. Floating Cyber Floating Geometries (Crystals & Polyhedra)
    const floatingMeshes: { mesh: THREE.Mesh | THREE.LineSegments; rotSpeed: { x: number; y: number; z: number }; initialY: number; floatOffset: number }[] = [];

    const geomTypes = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.OctahedronGeometry(2.0, 0),
      new THREE.TetrahedronGeometry(2.2, 0),
      new THREE.TorusGeometry(2.2, 0.4, 8, 24),
      new THREE.DodecahedronGeometry(2.0, 0),
      new THREE.IcosahedronGeometry(1.8, 1),
    ];

    const meshColors = [0x00f0ff, 0x8b5cf6, 0x38bdf8, 0x10b981, 0xec4899, 0xf59e0b];

    for (let i = 0; i < 9; i++) {
      const geo = geomTypes[i % geomTypes.length];
      const wireframeGeo = new THREE.WireframeGeometry(geo);
      const wireframeMat = new THREE.LineBasicMaterial({
        color: meshColors[i % meshColors.length],
        transparent: true,
        opacity: 0.35,
      });

      const lineMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
      
      // Distribute in space around edges
      const side = i % 2 === 0 ? 1 : -1;
      lineMesh.position.x = side * (18 + Math.random() * 16);
      lineMesh.position.y = (Math.random() - 0.5) * 35;
      lineMesh.position.z = -10 + (Math.random() - 0.5) * 30;

      worldGroup.add(lineMesh);
      floatingMeshes.push({
        mesh: lineMesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015,
        },
        initialY: lineMesh.position.y,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // 3. Cyber Synthwave Grid Floor at Horizon
    const gridGeo = new THREE.PlaneGeometry(160, 160, 40, 40);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const gridFloor = new THREE.Mesh(gridGeo, gridMat);
    gridFloor.rotation.x = -Math.PI / 2 + 0.1;
    gridFloor.position.y = -22;
    gridFloor.position.z = -20;
    worldGroup.add(gridFloor);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2, 80);
    cyanLight.position.set(20, 20, 20);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2, 80);
    purpleLight.position.set(-20, -20, 20);
    scene.add(purpleLight);

    // Mouse & Scroll Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Parallax Camera motion
      camera.position.x = currentMouseX * 3;
      camera.position.y = -currentMouseY * 2 - (scrollY * 0.008);
      camera.lookAt(0, -scrollY * 0.008, 0);

      // Starfield Rotation
      starField.rotation.y = elapsedTime * 0.02;
      starField.rotation.x = elapsedTime * 0.01;

      // Floating Geometry Rotations & Hover Bobbing
      floatingMeshes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.rotation.z += item.rotSpeed.z;
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 1.2 + item.floatOffset) * 1.5;
      });

      // Grid Floor Pulse
      gridFloor.position.z = -20 + (Math.sin(elapsedTime * 0.5) * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
