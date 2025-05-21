import { FC } from "react";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full  mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
