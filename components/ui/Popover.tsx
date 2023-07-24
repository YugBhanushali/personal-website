import React, { useState } from 'react';
import './Popover.css'; // CSS styles for the popover

const Popover = ({
  content,
  direction = 'top',
  arrowDirection = 'down',
  arrowColor = 'rgba(255, 255, 255, 0.16)',
  children
}: {
  content: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
  arrowColor?: string;
  children: React.ReactNode;
}) => {
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
        <div
          className={`popover border-[0px] border-[#515151] backdrop-filter backdrop-blur-2xl ${direction} sm:-top-[75px] -top-[60px] sm:px-[15px] sm:py-[8px] px-[10px] py-[5px] sm:text-[16px] text-[12px]`}
        >
          <div className="popover-content">{content}</div>
          <div
            className={`arrow-${arrowDirection}`}
            style={{ borderTopColor: arrowColor }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Popover;
