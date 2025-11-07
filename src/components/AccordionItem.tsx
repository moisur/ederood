import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-xl font-medium text-gray-800">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: { duration: 0.4, ease: "easeInOut" },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-lg text-gray-600 space-y-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default AccordionItem;
