import React from 'react';

interface InputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean;
  error: string | undefined;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  id, 
  name,
  type,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error && <div>{error}</div>}
    </>
  )
}

export default InputComponent;