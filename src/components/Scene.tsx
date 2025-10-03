"use client"
import { useState, Suspense } from "react"
import models from "@/constants/models.json"
import { Html, OrbitControls, Float } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
// Import the Model component
import Model from "./Model"
// Import the Screen component
import Screen from "./Screen"

const Scene = () => {
  const [model, setModel] = useState<IModel>(models[0])
  const handleModel = (model: IModel) =>{
    setModel(model)
  }
  return (
    <main
      style={{
        background: `radial-gradient(circle, ${model.color}90 0%, rgba(224, 224,224, 1) 100%)`,
      }}
      className='w-screen h-screen flex justify-center items-center'
    >
        <Canvas camera={{ fov: 55, position: [4,1,2.5]}}>
          <Suspense fallback={<Html>
            <div style={{ borderColor: model.color }} className="border-[4px] w-[40px] h-[40px] animate-spin"></div>
          </Html>}>
            <OrbitControls target={[0, 0, 0]} maxDistance={8} minDistance={2} enablePan={false}/>
            <Float speed={2.5}>
            <Model url={model.url}/>
            <Screen  handleModel={handleModel}/>
            </Float>
            
            {/* Add basic lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            
          </Suspense>
        </Canvas>
    </main>
  )
}

export default Scene
