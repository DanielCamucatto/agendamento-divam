import React, { useState } from 'react';
import { InputContainer, Input } from '../styles/inputStyles';

interface CustomInputProps {
  type: string;
  placeholder?: string;
  handleFilterChange: (value: string) => void;
  handleInvalidInput: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ handleFilterChange, handleInvalidInput, ...rest }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      handleInvalidInput();
    } else {
      handleFilterChange(value);
    }
  };

  return (
    <InputContainer>
      <Input onChange={handleChange} {...rest} />
    </InputContainer>
  );
};

export default CustomInput;
