import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  background: ${({ theme }) => theme.colors.mainBg};
  color: white;
  display: block;
  width: 100%;
  font-size: 14px;
  outline: 0;
  border: 1px solid #F6B0A6;
  padding: 10px;
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &::placeholder {
    color: #F6B0A6;
  }

`;

export default function Input({
  onChange, placeholder, name, value,
}) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
