import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'

type MinimalGLTF = { scene: Group }

const Model = ({ url }: { url: string }) => {
  const gltf = useGLTF(url) as unknown as MinimalGLTF

  return <primitive object={gltf.scene} />
}

export default Model
