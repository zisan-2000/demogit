import { motion } from "framer-motion";
import React from "react";
import talat from "../assets/images/talat.png"; // Replace with actual image path

const ProfileImage = () => {
  return (
    <motion.div
      className="relative mt-10 flex items-center justify-center md:mt-0"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: "350px", height: "380px" }} // Adjusted size for the container
    >
      {/* Motion Circle */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 506 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>

      {/* Profile Image */}
      <img
        src={talat}
        alt="Profile"
        className="relative z-10 rounded-full border-4 border-green-500 object-cover"
        style={{ width: "250px", height: "280px" }} // Adjusted size for the image
      />
    </motion.div>
  );
};

export default ProfileImage;
