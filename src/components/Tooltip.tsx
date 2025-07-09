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
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-[url(/src/assets/paper.jpg)] text-white text-xs rounded p-4 z-10 whitespace-pre leading-2">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
