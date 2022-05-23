import { FC } from "react";

type SubmitProps = {
  onClick: () => void;
};

export const SubmitButton: FC<SubmitProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Crea
    </button>
  );
};
