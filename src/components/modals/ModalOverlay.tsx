import React from "react";

import { ReactNode } from "react";

export const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-modal-overlay flex justify-center items-center z-10 p-4 py-0.5 px-2 md:py-4 md:px-8 lg:px-16 xl:px-[20%] 2xl:px-[30%]">
      {children}
    </div>
  );
};
