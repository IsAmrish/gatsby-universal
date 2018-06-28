import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Dialog = styled.dialog`
  display: none;
  border: none;
  padding: 0;

  &[open] {
    display: block;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: ${accent};
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  padding: 1rem 2rem;
  margin: 2rem 0;

  & + & {
    margin-left: 1rem;
  }
`;
