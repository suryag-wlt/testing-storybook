import type React from "react";

interface labelProps {
  title: string;
  htmlFor: string;
  fontSize?: string;
  color?: string;
  className?: string;
  fontWeight?: string;
}

const WltLabel: React.FC<labelProps> = ({
  title,
  htmlFor,
  fontSize,
  color,
  className,
  fontWeight,
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={className}
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "inline-block",
          maxWidth: "356px",
          maxLines: 1,
        }}
      >
        {title}
      </label>
    </>
  );
};

export default WltLabel;
