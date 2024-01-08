// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF('../../public/elements/models/capybara-mesh.gltf');
//   return <primitive object={scene} />;
// }

// export function ModelCapy() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 0, 5]} />
//       <Model />
//     </Canvas>
//   );
// }


// export function ModelDonut(props) {
//   const { nodes, materials } = useGLTF("/donut.glb");
//   const group = useRef();

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
//     }
//   });

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.Donut.geometry}
//         material={materials["Material.002"]}
//         position={[0.078, 0.034, 0.099]}
//       >
//         <mesh
//           geometry={nodes.Icing.geometry}
//           material={materials["Material.001"]}
//         />
//       </mesh>
//       <mesh
//         geometry={nodes.Plane.geometry}
//         material={materials.Material}
//         position={[0.375, 0.01, 0.376]}
//       />
//       <mesh
//         geometry={nodes.Donut_original.geometry}
//         material={nodes.Donut_original.material}
//       />
//       <mesh
//         geometry={nodes.Icing_original.geometry}
//         material={nodes.Icing_original.material}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/donut.glb");
