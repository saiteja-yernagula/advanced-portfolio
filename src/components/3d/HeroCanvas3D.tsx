import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Transformation Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Helper: Dynamic Holographic Canvas Texture for Tech Code Plates
    const createPlateTexture = (title: string, sub: string, colorHex: string, bgGlow: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 380;
      canvas.height = 190;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Dark translucent glass base
        ctx.fillStyle = 'rgba(7, 10, 20, 0.88)';
        ctx.fillRect(0, 0, 380, 190);

        // Border stroke with glow
        ctx.strokeStyle = colorHex;
        ctx.lineWidth = 4;
        ctx.strokeRect(4, 4, 372, 182);

        // Top Accent Bar
        ctx.fillStyle = bgGlow;
        ctx.fillRect(4, 4, 372, 28);

        // Header Status
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px monospace';
        ctx.fillText('● SYSTEM READY', 16, 22);

        // Title
        ctx.fillStyle = colorHex;
        ctx.font = 'bold 22px monospace';
        ctx.fillText(title, 20, 75);

        // Subtitle / Code description
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px monospace';
        ctx.fillText(sub, 20, 110);

        // Progress bar simulation
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(20, 140, 340, 12);
        ctx.fillStyle = colorHex;
        ctx.fillRect(20, 140, 280, 12);

        // Scanline overlay
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        for (let y = 0; y < 190; y += 4) {
          ctx.fillRect(0, y, 380, 2);
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    // ==========================================
    // 1. CENTRAL QUANTUM HYPERCUBE & CRYSTAL
    // ==========================================
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Inner Glowing Octahedral Crystal
    const innerCrystalGeo = new THREE.OctahedronGeometry(1.8, 0);
    const innerCrystalMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
    });
    const innerCrystal = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    coreGroup.add(innerCrystal);

    // Outer Faceted Crystal Wireframe
    const crystalWireGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const crystalWireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const crystalWire = new THREE.Mesh(crystalWireGeo, crystalWireMat);
    coreGroup.add(crystalWire);

    // Outer Hypercube Lattice Frame
    const boxFrameGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
    const boxFrameWire = new THREE.WireframeGeometry(boxFrameGeo);
    const boxFrameMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.6,
    });
    const boxFrame = new THREE.LineSegments(boxFrameWire, boxFrameMat);
    coreGroup.add(boxFrame);

    // ==========================================
    // 2. GYROSCOPIC ORBITAL ENERGY RINGS
    // ==========================================
    const ring1Geo = new THREE.TorusGeometry(4.8, 0.04, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(5.4, 0.04, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(6.0, 0.04, 16, 80);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.5 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // ==========================================
    // 3. 4 FLOATING 3D HOLOGRAPHIC TECH PLATES
    // ==========================================
    const platesData = [
      { title: 'PYTHON & DJANGO', sub: 'REST APIs • ORM • Backend', color: '#00f0ff', glow: 'rgba(0,240,255,0.4)', angle: 0 },
      { title: 'REACT 18 & REDUX', sub: 'State • Hooks • Custom UI', color: '#8b5cf6', glow: 'rgba(139,92,246,0.4)', angle: Math.PI / 2 },
      { title: 'MYSQL ARCHITECTURE', sub: 'Schemas • Indexing • Joins', color: '#10b981', glow: 'rgba(16,185,129,0.4)', angle: Math.PI },
      { title: '1000+ MENTORED', sub: '2000+ Projects Delivered', color: '#f59e0b', glow: 'rgba(245,158,11,0.4)', angle: (3 * Math.PI) / 2 },
    ];

    const plateMeshes: { mesh: THREE.Mesh; baseAngle: number; radius: number }[] = [];
    const plateGeo = new THREE.PlaneGeometry(2.8, 1.4);

    platesData.forEach((item) => {
      const tex = createPlateTexture(item.title, item.sub, item.color, item.glow);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(plateGeo, mat);
      rootGroup.add(mesh);
      plateMeshes.push({ mesh, baseAngle: item.angle, radius: 5.2 });
    });

    // ==========================================
    // 4. FLOATING ORBITING TECH CRYSTALS
    // ==========================================
    const crystalGeo = new THREE.OctahedronGeometry(0.3, 0);
    const crystalColors = [0x00f0ff, 0x8b5cf6, 0x10b981, 0xf59e0b, 0xec4899];
    const satellites: THREE.Mesh[] = [];

    for (let i = 0; i < 6; i++) {
      const satMat = new THREE.MeshStandardMaterial({
        color: crystalColors[i % crystalColors.length],
        emissive: crystalColors[i % crystalColors.length],
        emissiveIntensity: 0.8,
        wireframe: i % 2 === 1,
      });
      const sat = new THREE.Mesh(crystalGeo, satMat);
      rootGroup.add(sat);
      satellites.push(sat);
    }

    // ==========================================
    // 5. HELIX STREAMING LIGHT PARTICLES
    // ==========================================
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = (i / particleCount) * Math.PI * 8;
      const r = 2.5 + Math.random() * 2.5;
      positions[i3] = Math.cos(t) * r;
      positions[i3 + 1] = ((i / particleCount) - 0.5) * 10;
      positions[i3 + 2] = Math.sin(t) * r;

      colors[i3] = 0;
      colors[i3 + 1] = 0.94;
      colors[i3 + 2] = 1.0;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const helixParticles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(helixParticles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 4, 30);
    cyanPointLight.position.set(6, 6, 8);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0x8b5cf6, 3, 30);
    purplePointLight.position.set(-6, -4, 8);
    scene.add(purplePointLight);

    // Mouse Tracking Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -(((event.clientY - rect.top) / height) * 2 - 1);
      targetRotationY = mouseX * 0.55;
      targetRotationX = -mouseY * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      // Bobbing floating motion
      rootGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.2;

      // Crystal & Hypercube Rotations
      innerCrystal.rotation.y = elapsedTime * 0.6;
      innerCrystal.rotation.x = elapsedTime * 0.4;
      crystalWire.rotation.y = -elapsedTime * 0.5;
      crystalWire.rotation.z = elapsedTime * 0.3;
      boxFrame.rotation.x = elapsedTime * 0.25;
      boxFrame.rotation.y = elapsedTime * 0.35;

      // Gyroscopic Rings
      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.y = -elapsedTime * 0.5;
      ring3.rotation.x = elapsedTime * 0.45;

      // Orbit Floating Hologram Plates in circle around Core
      plateMeshes.forEach((item, idx) => {
        const currentAngle = item.baseAngle + elapsedTime * 0.25;
        item.mesh.position.x = Math.cos(currentAngle) * item.radius;
        item.mesh.position.z = Math.sin(currentAngle) * item.radius;
        item.mesh.position.y = Math.sin(elapsedTime * 1.5 + idx) * 0.8;
        // Make plates face camera slightly angled
        item.mesh.lookAt(camera.position.x * 0.4, camera.position.y * 0.4, camera.position.z);
      });

      // Orbit Satellites
      satellites.forEach((sat, idx) => {
        const angle = elapsedTime * 0.7 + (idx * Math.PI * 2) / 6;
        const radius = 3.6 + Math.sin(elapsedTime + idx) * 0.5;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.z = Math.sin(angle) * radius;
        sat.position.y = Math.sin(angle * 2 + idx) * 1.8;
        sat.rotation.y = elapsedTime * 2;
      });

      // Helix Particles Rotation
      helixParticles.rotation.y = elapsedTime * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth || 500;
      const newHeight = containerRef.current.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] lg:h-[580px] flex items-center justify-center pointer-events-auto">
      {/* 3D WebGL Canvas Mount (Seamless Borderless) */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Status Badges with Zero Box Frame */}
      <div className="absolute top-2 right-2 pointer-events-none hidden sm:flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-[#080c16]/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono backdrop-blur-md flex items-center gap-2 shadow-neon-cyan">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>QUANTUM_CORE_3D.live</span>
        </span>
      </div>

      <div className="absolute bottom-2 left-2 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
        <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-300">
          ● Interactive Orbit
        </span>
        <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-purple-300">
          60 FPS WebGL
        </span>
      </div>
    </div>
  );
};
