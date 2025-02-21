import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BabyModel from "./BabyModel"; // Import a 3D baby model for rendering
import styles from "./BabyGrowth.module.css";

const BabyGrowthVisualization = ({ week }) => {
  const [growthInfo, setGrowthInfo] = useState("");
  const [aiTip, setAiTip] = useState("");

  useEffect(() => {
    // AI-generated pregnancy tips
    const aiTips = {
      5: "Your baby is the size of an apple seed! Stay hydrated and take prenatal vitamins.",
      10: "Your baby now has tiny fingers! Gentle stretching can help with cramps.",
      15: "Your baby can now sense light. Try talking to them to build connection!",
      20: "Halfway there! Your baby is as big as a banana! Keep up with regular checkups.",
      25: "Baby is developing hearing. Play soft music and talk to them daily!",
      30: "Your baby is practicing breathing. Deep breathing exercises help both of you!",
      35: "Almost there! Baby is gaining fat for warmth. Rest and relax as much as possible!",
      40: "Your little one is ready! Keep your hospital bag ready and stay calm."
    };
    
    // Weekly growth updates
    const growthUpdates = {
      5: "At week 5, your baby is just forming their nervous system!",
      10: "At week 10, your baby has developed tiny limbs and organs!",
      15: "At week 15, their little heart is pumping blood throughout their body!",
      20: "At week 20, your baby is about 10 inches long and growing fast!",
      25: "At week 25, your baby's senses are developing, and they can hear your voice!",
      30: "At week 30, baby’s brain is growing rapidly, and they can open their eyes!",
      35: "At week 35, your baby is plumping up and getting ready for birth!",
      40: "At week 40, your baby is fully grown and ready to meet you!"
    };

    setGrowthInfo(growthUpdates[week] || "Your baby is growing beautifully!");
    setAiTip(aiTips[week] || "Keep taking care of yourself and your little one!");
  }, [week]);

  return (
    <div className={styles.container}>
      <h2>Baby Growth - Week {week}</h2>
      <p className={styles.growthInfo}>{growthInfo}</p>
      <div className={styles.visualization}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <BabyModel week={week} />
          <OrbitControls />
        </Canvas>
      </div>
      <p className={styles.aiTip}><strong>AI Tip:</strong> {aiTip}</p>
    </div>
  );
};

export default BabyGrowthVisualization;
