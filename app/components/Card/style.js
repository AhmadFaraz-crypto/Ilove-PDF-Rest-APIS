import styled from 'styled-components';

const variantsBg = {
  primary: '#FFFFFF;',
  secondary: '#F9FAFC',
  tertiary: '#FFFFFF',
  quaternary: '#F4F6FA',
};

const boxShadow = {
  primary: '0px 0px 12px rgba(19, 59, 106, 0.1);',
  tertiary: '0px 1px 2px rgba(90, 97, 163, 0.12);',
  quinary: '0px 5px 14px rgba(132, 132, 132, 0.1);',
};

const Card = styled.div`
  background: ${props => variantsBg[props.bgColor]};
  border-radius: 6px;
  box-shadow: ${props => boxShadow[props.shadow]};
  height: ${props => (props.bgColor === 'secondary' ? '118px;' : 'none')};
  border: ${props =>
    props.bgColor === 'secondary' ? '1px solid #ECF0F4;' : ''};
  border: ${props =>
    props.bgColor === 'tertiary' ? '1px solid #F3F5F9;' : ''};
  height: ${props => (props.bgColor === 'quaternary' ? '53px;' : 'none')};
  width: ${props => (props.bgColor === 'quaternary' ? '410px;' : 'none')};
  border-radius: ${props => (props.bgColor === 'quaternary' ? '0px' : '')};
  box-sizing: border-box;
`;

export default Card;
