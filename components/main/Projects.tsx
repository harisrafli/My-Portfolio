"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-transparent font-medium mt-[10px] text-center mb-[15px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
        >
            My Projects
        </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            I have been working on a web based application project for my graduation purposes, here is my project.
        </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pos.png"
          title="Point Of Sales"
          description="Produk point of sales standart yang dapat digunakan oleh perusahaan sebagai alat bantu pembelian dan penjualan barang."
        />
        <ProjectCard
          src="/cv.png"
          title="Portfolio"
          description="My Portfolio."
        />
      </div>
    </div>
  );
};

export default Projects;
