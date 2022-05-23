import { ErrorFormStyled, InputFormStyled } from "../routes/add-user-styles";

interface InputProps {
  name: string;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  error: string;
}

export const FormInput: React.FC<InputProps> = (props) => {
  return (
    <InputFormStyled>
      <label>{props.name}</label>
      <input onChange={props.handle} required={props.required} />
      {<ErrorFormStyled>{props.error}</ErrorFormStyled>}
    </InputFormStyled>
  );
};
