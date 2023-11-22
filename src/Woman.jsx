/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pixel_Monster (https://sketchfab.com/ar.jethin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/indian-office-woman-e6c60cafd33c4d54b0b840c4146ed244
Title: Indian Office Woman
*/

import React, {useRef} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";
import model from "./models/woman.glb";

const Woman = (props) => {
   const group = useRef();
   const {nodes, materials, animations} = useGLTF(model);
   const {actions} = useAnimations(animations, group);
   return (
      <group ref={group} {...props} dispose={null} castShadow>
         <group name="Sketchfab_Scene">
            <group
               name="Sketchfab_model"
               rotation={[-Math.PI / 15, 0, 0]}
               scale={2.086}
               castShadow
            >
               <group
                  name="7ab0120971d74f4ba654fc5c904dbf76fbx"
                  rotation={[Math.PI / 2, 0, 0]}
                  castShadow
               >
                  <group name="Object_2">
                     <group name="RootNode">
                        <group name="AvatarRoot">
                           <group name="Object_5">
                              <primitive object={nodes._rootJoint} />
                              <skinnedMesh
                                 name="Object_7"
                                 geometry={nodes.Object_7.geometry}
                                 material={materials.AvatarBody}
                                 skeleton={nodes.Object_7.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_8"
                                 geometry={nodes.Object_8.geometry}
                                 material={materials.AvatarEyelashes}
                                 skeleton={nodes.Object_8.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_9"
                                 geometry={nodes.Object_9.geometry}
                                 material={materials.AvatarHead}
                                 skeleton={nodes.Object_9.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_10"
                                 geometry={nodes.Object_10.geometry}
                                 material={materials.AvatarLeftCornea}
                                 skeleton={nodes.Object_10.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_11"
                                 geometry={nodes.Object_11.geometry}
                                 material={materials.AvatarLeftEyeball}
                                 skeleton={nodes.Object_11.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_12"
                                 geometry={nodes.Object_12.geometry}
                                 material={materials.AvatarRightCornea}
                                 skeleton={nodes.Object_12.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_13"
                                 geometry={nodes.Object_13.geometry}
                                 material={materials.AvatarRightEyeball}
                                 skeleton={nodes.Object_13.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_14"
                                 geometry={nodes.Object_14.geometry}
                                 material={materials.AvatarTeethLower}
                                 skeleton={nodes.Object_14.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_15"
                                 geometry={nodes.Object_15.geometry}
                                 material={materials.AvatarTeethUpper}
                                 skeleton={nodes.Object_15.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_16"
                                 geometry={nodes.Object_16.geometry}
                                 material={materials.glasses}
                                 skeleton={nodes.Object_16.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_17"
                                 geometry={nodes.Object_17.geometry}
                                 material={materials.haircut}
                                 skeleton={nodes.Object_17.skeleton}
                                 castShadow
                              />
                              <skinnedMesh
                                 name="Object_18"
                                 geometry={nodes.Object_18.geometry}
                                 material={materials.outfit}
                                 skeleton={nodes.Object_18.skeleton}
                                 castShadow
                              />
                              <group name="AvatarBody" />
                              <group name="AvatarEyelashes" />
                              <group name="AvatarHead" />
                              <group name="AvatarLeftCornea" />
                              <group name="AvatarLeftEyeball" />
                              <group name="AvatarRightCornea" />
                              <group name="AvatarRightEyeball" />
                              <group name="AvatarTeethLower" />
                              <group name="AvatarTeethUpper" />
                              <group name="glasses" />
                              <group name="haircut" />
                              <group name="outfit" />
                           </group>
                        </group>
                     </group>
                  </group>
               </group>
            </group>
         </group>
      </group>
   );
};

useGLTF.preload(model);

export default Woman;
