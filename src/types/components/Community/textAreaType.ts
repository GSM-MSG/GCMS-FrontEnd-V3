import { Dispatch, SetStateAction } from 'react';

export interface TextAreaProps {
  placeholder: string;
  maxLength: number;
  text: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}
