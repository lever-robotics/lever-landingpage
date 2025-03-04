"use client";
import * as React from "react";

interface CheckListItemProps {
  text: string;
}

export const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => {
  return (
    <div className="flex items-start">
      <div className="flex gap-3.5 items-center">
        <svg
          className="flex shrink-0 self-stretch my-auto h-[26px] w-[26px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            fill="#3CCADD"
          />
        </svg>
        <div className="self-stretch my-auto font-['Spline_Sans']">{text}</div>
      </div>
    </div>
  );
};
