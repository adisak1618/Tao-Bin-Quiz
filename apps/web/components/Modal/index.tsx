"use client";

import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../BackDrop";
import { ReactNode } from "react";

const dropIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Modal = ({
  title,
  handleClose,
  children,
}: {
  title: string;
  handleClose: () => void;
  children: ReactNode;
}) => {
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="z-50 modal orange-gradient bg-white mx-auto max-w-screen-md w-full md:w-[calc(100%-48px)] h-full md:h-auto md:max-h-[calc(100%-48px)] md:rounded-md"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex border-b border-gray-200 items-center">
            <div className="flex-1 p-4 text-center text-lg font-bold">
              {title}
            </div>
            <div className="px-3">
              <button
                className="hover:bg-gray-200 p-1 rounded-md"
                onClick={handleClose}
              >
                <XIcon />
              </button>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};
