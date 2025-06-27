import React from "react";

const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="relative group ">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-yellow-800 text-white text-xs rounded p-4 z-10 whitespace-pre">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
