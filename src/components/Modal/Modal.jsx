import cn from "classnames";
import { useEffect } from "react";

export const Modal = ({ children, className, show }) => {
  const toggleOverFlowBody = (value = "") => {
    document.querySelector("body").style.overflow = value;
  }

  useEffect(() => {
    toggleOverFlowBody(show ? "hidden" : "");
    return () => {
      toggleOverFlowBody();
    };
  }, [show]);
  return (
    <div
      data-testid="component-modal"
      className={cn(
        "fixed top-0 left-0 w-full h-full z-50 bg-modal justify-center items-start flex overflow-x-hidden overflow-y-auto px-15px",
        className
      )}
    >
      <div className="w-[400px] rounded-10px bg-white mt-[10%] pt-30px px-20px pb-20px">
        {children}
      </div>
    </div>
  );
};
