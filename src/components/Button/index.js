import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  color: white;
  border: none;
  background-color: #CC0C1D;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 10px;
  font-style: normal;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  display: block;
  transition: all .5s;

  &:not([disabled]):hover,
  &:not([disabled]):focus {
      opacity: .8;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: #F6B0A6; 
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
