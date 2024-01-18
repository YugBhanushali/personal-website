import React from "react";

const SectionDivider = ({
  sectionName,
  className,
}: {
  sectionName: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 ${className} border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl`}
    >
      <div className="flex justify-center items-center gap-2">
        {/* Divider Name */}
        <div className="text-[13px] sm:text-[17px] font-semibold">
          {sectionName}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
