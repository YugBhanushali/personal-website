import React, { useState } from 'react';
import './Popover.css'; // CSS styles for the popover

const Popover = ({ content, children }:{content:string,children:React.ReactNode}) => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverEnter = () => {
    setShowPopover(true);
  };

  const handlePopoverLeave = () => {
    setShowPopover(false);
  };

  return (
    <div className="popover-container">
      <div
        className="hover-element"
        onMouseEnter={handlePopoverEnter}
        onMouseLeave={handlePopoverLeave}
      >
        {children}
      </div>
      {showPopover && (
        <div className="popover border-[0px] border-[#515151] backdrop-filter backdrop-blur-2xl">
          <div className="popover-content">{content}</div>
          <div className="arrow-down"></div>
        </div>
      )}
    </div>
  );
};

export default Popover;
