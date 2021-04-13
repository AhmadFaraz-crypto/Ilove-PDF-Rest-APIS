import styled from 'styled-components';

const Container = styled.div`
  display: ${props => (props.label ? 'flex' : 'block')};
  justify-content: space-between;
  align-items: center;
  position: relative;

  label {
    font: normal normal 600 22px/27px Montserrat;
    width: 30%;
  }

  .form-group {
    width: ${props => (props.label ? '70%' : 'initial')};
    margin-bottom: 0px !important;
  }

  input,
  select {
    font-style: normal;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #9d9d9d;
    padding: 13px 16px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    height: 60px;
  }

  .input-icon {
    position: absolute;
    top: 16px;
    left: 12px;
  }

  @media screen and (max-width: 1450px) {
    flex-direction: column;
    align-items: initial;

    label {
      width: initial;
    }

    .form-group {
      width: initial;
    }
  }
`;

export default Container;
