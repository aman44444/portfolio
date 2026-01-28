import React from "react";
import { ModalProps } from "@/types/modal";

const Modal = ({
  isOpen,
  onClose,
  title,
  labelledBy,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/25 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <div
        className="relative w-11/12 md:w-3/4 h-4/5 md:h-3/4
                   bg-white rounded-xl overflow-auto
                   [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                   [scrollbar-width:none]"
      >
        <header className="h-1/6 flex items-center justify-between px-4 md:px-6 py-4">
          <h2 id={labelledBy} className="text-2xl md:text-3xl font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            aria-label={`Close ${title} modal`}
            className="h-8 w-8 rounded-full border-2 flex items-center justify-center
                       hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </header>

        <div className="border-t border-gray-300 mt-1" />

        {children}
      </div>
    </div>
  );
};

export default Modal;
