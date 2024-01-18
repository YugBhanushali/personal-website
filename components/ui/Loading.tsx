import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center gap-x-2">
      <Spinner height={20} width={20} />
    </div>
  );
};

export default Loading;
