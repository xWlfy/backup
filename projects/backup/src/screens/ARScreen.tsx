import React from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
} from "@reactvision/react-viro";

const ARScene = () => {
  return (
    <ViroARScene>
      <ViroText
        text="Welcome to SoulStar AR"
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
      />
    </ViroARScene>
  );
};

export const ARScreen = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARScene,
      }}
      style={{ flex: 1 }}
    />
  );
};