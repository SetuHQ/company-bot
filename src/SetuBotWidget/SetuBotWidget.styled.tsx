import styled from 'styled-components';
import '../styles/fonts.css';

interface SetuBotWidgetStyledProps {
  primaryColor?: string;
}

export const SetuBotWidgetStyled = styled.div<SetuBotWidgetStyledProps>`
  font-family: 'Ibm Plex Sans', sans-serif;
  --color-primary: #152533;
  --color-text: white;
  --input-height: 46px;
  .feedback-widget {
    font-family: 'Ibm Plex Sans', sans-serif;
    z-index: 99999;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 100vw;
    height: 0;
    font-size: 15px;
    line-height: 1.4;

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  .feedback-widget-trigger-button {
    font-family: 'Ibm Plex Sans', sans-serif;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    background: ${(props) =>
      props.primaryColor ? props.primaryColor : props.theme.SetuBot.iconBg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;

    svg {
      height: 100%;
    }
  }

  .widget-popover {
    font-family: 'Ibm Plex Sans', sans-serif;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2147483999;
    display: flex;
    background-color: ${(props) => props.theme.body.bg};
    color: ${(props) => props.theme.text.paras.color};
    width: 28%;
    height: 100%;
    overflow-y: scroll;
  }

  .back-icon {
    font-family: 'Ibm Plex Sans', sans-serif;
    cursor: pointer;
    color: ${(props) => props.theme.text.paras.color};
  }
  .input-field {
    font-family: 'Ibm Plex Sans', sans-serif;
  }
  .input-field:focus,
  .input-field:active {
    border: 2px solid
      ${(props) =>
        props.primaryColor ? props.primaryColor : props.theme.SetuBot.primary};
  }
  .submit-button {
    font-family: 'Ibm Plex Sans', sans-serif;
    background-color: ${(props) =>
      props.primaryColor ? props.primaryColor : props.theme.SetuBot.primary};
    border: ${(props) =>
      props.primaryColor ? props.primaryColor : props.theme.SetuBot.primary};
  }
  @media (max-width: 900px) {
    .widget-popover {
      width: 100%;
    }
  }
`;
