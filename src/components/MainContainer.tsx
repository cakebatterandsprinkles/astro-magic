import type { ReactElement } from "react";

const MainContainer = ({ children }: { children: ReactElement }) => {
  return (
    <div className="p-4 max-w-5xl flex flex-col">
      <div className="">{children}</div>
    </div>
  );
};
export default MainContainer;
