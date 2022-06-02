import { FC } from "react";
import { Select } from "../select/Select";
import "./Input.css";

type InputProps = {
  label: string;
  name: string;
  inputType?: string;
  type: string;
  options?: string[];
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  inputType,
  type,
  options,
  placeholder,
  handleChange,
  handleSelect,
  error,
}) => {
  return (
    <div className="textField">
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <Select handleChange={handleSelect} options={options} name={name} />
      ) : (
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      <div className="error">{error && "Inserisci il valore"}</div>
    </div>
  );
};
