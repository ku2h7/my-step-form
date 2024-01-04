import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  type: 'submit' | 'button';
}

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  label,
  type,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default ButtonComponent;