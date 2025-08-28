import React from "react";
import "./button.css";

interface ButtonProps {
  buttonText: string | number;
  type: "submit" | "reset" | "button" | undefined;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  badgefontSize?: string;
  badgeColor?: string;
  badgeFontWeight?: string;
  badgeBgColor?: string;
  badgeBorderRadius?: string;
  className?: string;
  icon?: React.ReactNode;

  badgeValue?: string | number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const WltButton: React.FC<ButtonProps> = ({
  buttonText,
  type,
  backgroundColor,
  fontSize,
  fontWeight,
  color,
  border,
  borderRadius,
  width,
  height,
  icon,
  className = "",
  badgeValue,
  badgefontSize,
  badgeColor,
  badgeFontWeight,
  badgeBgColor,
  badgeBorderRadius,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className || "primary"}
      style={{
        fontSize,
        color,
        fontWeight,
        backgroundColor,
        border,
        borderRadius,
        width,
        height,
      }}
    >
      {icon}
      {buttonText}
      {badgeValue !== undefined && (
        <span
          className="badge"
          style={{
            fontSize: `${badgefontSize || fontSize}`,
            color: `${badgeColor || color}`,
            fontWeight: `${badgeFontWeight || fontWeight}`,
            backgroundColor: `${badgeBgColor || backgroundColor}`,
            borderRadius: `${badgeBorderRadius || borderRadius}`,
          }}
        >
          {badgeValue}
        </span>
      )}
    </button>
  );
};

export default WltButton;
