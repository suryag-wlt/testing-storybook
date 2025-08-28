import type React from "react";
import './Input.css'
interface InputProps {
  name: string;
  type: string;
  placeholdder?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  readOnly?: boolean;
  required?: boolean;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  fontSize?: string;
  fontWieght?: string;
  border?: string;
  borderRadius?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const WltInput: React.FC<InputProps> = ({
  name,
  type,
  placeholdder,
  value,
  width,
  disabled,
  className,
  readOnly,
  required,
  height,
  color,
  bgColor,
  fontSize,
  fontWieght,
  border,
  borderRadius,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className={`form-control ${className}`}
        placeholder={placeholdder}
        readOnly={readOnly}
        required={required}
        style={{
          width: width,
          height: height,
          color: color,
          backgroundColor: bgColor,
          fontSize: fontSize,
          fontWeight: fontWieght,
          border: border,
          borderRadius: borderRadius,
        }}
      />
    </>
  );
};

export default WltInput;
