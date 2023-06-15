// import React, { useState } from 'react';
// import { InputContainer, Input } from '../styles/inputStyles';

// interface CustomInputProps {
//   type: string;
//   placeholder?: string;
//   // handleFilterChange: (filter:string) => void;
//   handleFilterChange: (value: string) => void;
// }

// const CustomInput: React.FC<CustomInputProps> = ({ handleFilterChange, ...rest }) => {

//   return (
//     <InputContainer>
//       <Input onChange={handleFilterChange} {...rest}/>
//     </InputContainer>
//   );
// };

// export default CustomInput;



// import React from 'react';
// import { InputContainer, Input } from '../styles/inputStyles';

// interface CustomInputProps {
//   type: string;
//   placeholder?: string;
//   value: string; // Propriedade value para exibir o valor atual do input
//   onChange: (value: string) => void; // Propriedade onChange para atualizar o valor
// }

// const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, ...rest }) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(event.target.value);
//   };

//   return (
//     <InputContainer>
//       <Input value={value} onChange={handleChange} {...rest} />
//     </InputContainer>
//   );
// };

// export default CustomInput;

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
