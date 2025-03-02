import React from "react";

interface Props {
  value: string;
  disabled?: boolean;
  width?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  value,
  disabled,
  width = "300px",
  onChange,
}) => {
  return (
    <input
      style={{ padding: "16px", width }}
      type="text"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
