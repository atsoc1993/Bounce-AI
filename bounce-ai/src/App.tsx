import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

export default function App() {
  return (
    <div className="bg-green-200 h-full w-full p-5">
      <div className="bg-gray-800 h-full w-full shadow-blue-300 shadow-2xl p-5">
        <div className="shadow-green-300 shadow-2xl h-full w-full p-5">
          <div className="shadow-green-300 shadow-2xl h-full w-full p-5">
            <div className="shadow-green-300 shadow-2xl h-full w-full p-5">
              <div className="shadow-green-300 shadow-2xl h-full w-full p-5">
                <Canvas
                  camera={{ position: [0, 5, 20] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 3]} intensity={200} angle={Math.PI / 6} />
                  <Physics gravity={[0, -9.81, 0]}>
                    <RigidBody position={[0, 10, 0]} restitution={2}>
                      <mesh>
                        <sphereGeometry args={[1, 50, 50]} />
                        <meshStandardMaterial color="white" />
                      </mesh>
                    </RigidBody>
                    <RigidBody type="fixed">
                      <mesh>
                        <boxGeometry args={[10, 1, 10]} />
                        <meshStandardMaterial color="white" />
                      </mesh>
                    </RigidBody>
                  </Physics>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};