import { DevelperStatus } from "@/utils/Constants";
import React from "react";

type StatusCircleProps = {
  currentStatus: "Active" | "Building" | "Deploying";
};

const StatusCircle = ({ currentStatus }: StatusCircleProps) => {
    const { title, colour, boxShadow } = DevelperStatus(currentStatus);
  return (
    <div
      className={`h-2 w-2 rounded-full filter `}
      style={{
        boxShadow: `0px 0px 7px 4px ${boxShadow}`,
        backgroundColor: `${colour}`,
      }}
    />
  );
};

export default StatusCircle;
