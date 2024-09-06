import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, useTexture } from '@react-three/drei';
import mat from '../public/matcap/matcap.png';

const Torus1 = () => {
  const matcap = useTexture(mat)
  const meshRef = useRef();
  const cycles = 4; // Número de ciclos completos
  const period = 2 * Math.PI; // Periodo de un ciclo completo en radianes

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (meshRef.current) {
      if (t >= 12) {
        // Cuando pasen 12 segundos, resetea la posición a (0, 0, 0)
        meshRef.current.position.set(0, 0, 0);
      } else {
        // Movimiento senoidal en Y
        const phase = (t % period) / period; // Normaliza el tiempo en el rango [0, 1]
        const cycleProgress = Math.sin(phase * cycles * Math.PI * 2);
        meshRef.current.position.y = cycleProgress * 2; // Ajusta el factor 2 según sea necesario
      }
    }
  });

  return (
    <Torus ref={meshRef} args={[2, 0.5, 16, 64]}>
      <meshMatcapMaterial matcap={matcap} flatShading={true} />
    </Torus>
  );
};

export default Torus1;
