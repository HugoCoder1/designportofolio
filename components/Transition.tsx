"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </>
  );
}
