import React from "react";

import { ReactNode } from "react";

export const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-modal-overlay flex justify-center items-center z-10 p-4">
      {children}
    </div>
  );
};
