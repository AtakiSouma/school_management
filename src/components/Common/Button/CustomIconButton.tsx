// components/CustomButton.tsx
import React from "react";
import Image from "next/image";

interface CustomButtonProps {
  onClick?: () => void;
  iconSrc: string;
  altText: string;
  buttonClass?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const CustomIconButton: React.FC<CustomButtonProps> = ({
  onClick,
  iconSrc,
  altText,
  buttonClass = "w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow",
  iconWidth = 14,
  iconHeight = 14,
}) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <Image
        src={iconSrc}
        alt={altText}
        width={iconWidth}
        height={iconHeight}
      />
    </button>
  );
};

export default CustomIconButton;
