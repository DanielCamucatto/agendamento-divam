import React from 'react';
import { Button } from '../styles/btnStyle'



interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  as?: React.ElementType; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
