import styled from 'styled-components';

export interface SpinnerStyledProps {
  modalColor?: string;
}

export const SpinnerStyled = styled.div<SpinnerStyledProps>`
  .spinner {
    position: relative;
    padding: 8px;
    border: 3px solid;
    border-top-color: transparent;
    border-right-color: transparent;
    color: transparent !important;
    box-shadow: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  .spinner::after {
    display: block;
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    content: '';
    border: 3px solid;
    border-color: ${(props) =>
      props.modalColor ? `#${props.modalColor}` : '#6b92ba'};
    border-top-color: transparent;
    border-right-color: transparent;
    -webkit-animation: spinner 0.4s infinite linear;
    -webkit-animation: spinner 0.4s infinite linear;
    animation: spinner 0.4s infinite linear;
  }
  /*  Animation for loader  */
  @-webkit-keyframes spinner {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
