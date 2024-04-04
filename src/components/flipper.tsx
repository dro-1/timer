import clsx from "clsx";
import { useEffect, useState } from "react";

export const Flipper: React.FC<{ value: number }> = ({ value }) => {
  const [closed, setClosed] = useState(false);
  // const [hide, setHide] = useState(false);
  const [iValue, setIValue] = useState(value);

  useEffect(() => {
    setClosed((iClosed) => !iClosed);

    setTimeout(() => {
      setIValue(value);
      setClosed(false);
    }, 150);
  }, [value]);

  return (
    <div className="relative mx-1">
      <div className={clsx("flex flex-col relative z-10")}>
        <div className="h-[8px] w-[8px] bg-[#1E1F29] rounded-full absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-0 z-50" />
        <div className="h-[8px] w-[8px] bg-[#1E1F29] rounded-full absolute top-[50%] -translate-y-[50%] translate-x-[50%] right-0 z-50" />
        <div
          className={clsx(
            "text-[2rem]  h-[60px] w-[60px] lg:h-[100px] lg:w-[100px] lg:text-[4rem]  font-bold rounded-lg flex items-center justify-center bottom-clip overflow-hidden relative top-[32.8px] lg:top-[50px] transition-transform text-[#D15272] z-40",
            !closed && "bg-[#343755]",
            closed && "bg-[#1E1F29] -rot-180"
          )}
        >
          {iValue}
        </div>
        <div
          className={clsx(
            "text-[2rem] h-[60px] w-[60px]  lg:h-[100px] lg:w-[100px] lg:text-[4rem]  bg-[#424466] font-bold rounded-lg flex items-center justify-center top-clip overflow-hidden relative bottom-[27.2px] lg:bottom-[50px] text-[#FB6087]"
          )}
        >
          {iValue}
        </div>
      </div>
    </div>
  );
};
