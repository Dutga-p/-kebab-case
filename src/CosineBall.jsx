import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const CosineBall = () => {
  const meshRef = useRef();
  const [time, setTime] = useState(0);
  const cycles = 4; // Número de ciclos completos
  const period = 2 * Math.PI; // Periodo de un ciclo completo en radianes

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    setTime(t);
    if (meshRef.current) {
      const phase = (t % period) / period; // Normaliza el tiempo en el rango [0, 1]
      const cycleProgress = Math.sin(phase * cycles * Math.PI * 2);
      if(time == 12){
        meshRef.current.position.y = 0
        meshRef.current.position.x = 0
        meshRef.current.position.z = 0
      }else{
        meshRef.current.position.y = cycleProgress * 2; // Ajusta el factor 2 según sea necesario
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial color="orange" />
    </Sphere>
  );
};


export default CosineBall;