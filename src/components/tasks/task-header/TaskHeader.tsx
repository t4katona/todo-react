import React from "react";

export const TaskHeader = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="flex justify-between items-center border-mainWidth border-solid border-primary rounded p-2 mb-4">
      <h3 className="font-medium">{categoryName}</h3>
      <p className="w-min px-2 py-1 bg-secondary-backgroundColor rounded">0</p>
    </div>
  );
};
