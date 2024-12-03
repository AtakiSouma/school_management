import React from "react";

interface CustomPaginationButtonProps {
  onClick?: () => void;
  title: string;
  buttonDefaultClass?: string;
  isDefault?: boolean;
  extraClassName?: string;
  disabled?: boolean;
}

const CustomPaginationButton: React.FC<CustomPaginationButtonProps> = ({
  title,
  disabled = false,
  extraClassName = "",
  isDefault = true,
  buttonDefaultClass = "py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed ",
  onClick,
}) => {
  // Determine if the default class should be applied
  const buttonClass = isDefault ? buttonDefaultClass : "";

  return (
    <button
      className={`${buttonClass} ${extraClassName}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default CustomPaginationButton;
