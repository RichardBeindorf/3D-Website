// import Head from "next/head";
import * as THREE from 'three';
import styled from "styled-components";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import dynamic from 'next/dynamic';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  margin-top: 50px;
`;

const _Component = () => {

const loader = new GLTFLoader();
loader.load(
	'@/public/AnimationEr3atz.glb',
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}
);
};

export const Component = dynamic(() => Promise.resolve(_Component), {
  ssr: false
});



export default function Home() {
  return (
    <>
      <H1>My 3D Website</H1>
      <Canvas>

<ambientLight intensity={2}/>

{typeof window !== 'undefined' && <orbitControls />}

</Canvas>
    </>
  );
}
