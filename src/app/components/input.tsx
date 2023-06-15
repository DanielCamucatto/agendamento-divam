import React from 'react';
import { InputContainer, Input } from '../styles/inputStyles';

interface CustomInputProps {
  type: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ ...rest }) => {
  return (
    <InputContainer>
      <Input {...rest} />
    </InputContainer>
  );
};

export default CustomInput;
