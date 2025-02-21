// src/models/BabyModel.jsx
import React from "react";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const BabyModel = ({ week }) => {
  const [size, setSize] = useState(0.2); // Default size for the model
  const [color, setColor] = useState("#00bcd4"); // Default color

  useFrame(() => {
    // Example animation: make the baby grow based on the week
    if (week >= 5 && week <= 10) {
      setSize(0.3);
    } else if (week > 10 && week <= 20) {
      setSize(0.5);
    } else if (week > 20 && week <= 30) {
      setSize(0.7);
    } else if (week > 30) {
      setSize(1);
      setColor("#ff5722"); // Change color as the baby gets closer to birth
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default BabyModel;
