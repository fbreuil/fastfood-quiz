import styled from 'styled-components';

const Input = styled.input`
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

export default Input;
