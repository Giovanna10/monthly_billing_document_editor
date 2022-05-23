import { FC } from "react";
import './Input.css'

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="textField">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
