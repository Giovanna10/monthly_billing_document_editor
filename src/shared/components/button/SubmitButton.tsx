import { FC } from "react";
import './SubmitButton.css'

type SubmitProps = {
  onClick: () => void;
};

export const SubmitButton: FC<SubmitProps> = ({ onClick }) => {
  return (
    <div className="submit">
      <button onClick={onClick}>Crea</button>
    </div>
  );
};
