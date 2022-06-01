import { FC } from "react";
import "./Select.css";

type SelectProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  name: string;
};

export const Select: FC<SelectProps> = ({ handleChange, options, name }) => {
  return (
    <div className="select">
      <select id={name} name={name} onChange={handleChange} title={name}>
        {options?.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};
