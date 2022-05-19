import { FC } from "react";
import "./Select.css";

type SelectProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<SelectProps> = ({ handleChange }) => {
  return (
    <div className="select">
      <label htmlFor="company">Nome Azienda</label>
      <select id="company" onChange={handleChange} title="company">
        <option>Apophis_Contacts</option>
        <option>Digital_Center</option>
      </select>
    </div>
  );
};
