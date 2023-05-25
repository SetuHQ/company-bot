import styled from 'styled-components';
import '../styles/fonts.css';

interface CompanyBotWidgetStyledProps {
  primaryColor?: string;
}

export const CompanyBotWidgetStyled = styled.div<CompanyBotWidgetStyledProps>`
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
      props.primaryColor ? `#${props.primaryColor}` : '#C6EFF0'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 60px;
    padding: 6px 12px;
    font-size: 0.8275862068965517em;
    box-shadow: 0 0.2px 0.2px rgba(0, 0, 0, 0.056),
      0 2px 2px rgba(0, 0, 0, 0.072), 0 4.8px 3.6px rgba(0, 0, 0, 0.096),
      0 8px 16px rgba(0, 0, 0, 0.16);

    svg {
      height: 100%;
    }
  }

  .widget-popover {
    box-sizing: border-box;
    font-family: 'Ibm Plex Sans', sans-serif;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1000000000;
    display: flex;
    background-color: hsl(0, 0%, 100%);
    color: '#213a50';
    width: 30%;
    height: 100%;
    overflow-y: scroll;
    border-radius: 8px;
    box-shadow: 0 0.2px 0.2px rgba(0, 0, 0, 0.056),
      0 2px 2px rgba(0, 0, 0, 0.072), 0 4.8px 3.6px rgba(0, 0, 0, 0.096),
      0 8px 16px rgba(0, 0, 0, 0.16);
    padding: 24px;
  }

  .back-icon {
    font-family: 'Ibm Plex Sans', sans-serif;
    cursor: pointer;
    color: '#213a50';
    margin-right: 8px;
    background: none;
    border: none;
    padding: 0;
  }
  .input-field {
    font-family: 'Ibm Plex Sans', sans-serif;
  }
  .input-field:focus,
  .input-field:active {
    border: 2px solid
      ${(props) =>
        props.primaryColor ? props.primaryColor : 'hsl(181,  58%,  53%)'};
  }
  .submit-button {
    font-family: 'Ibm Plex Sans', sans-serif;
    background-color: ${(props) =>
      props.primaryColor ? props.primaryColor : 'hsl(181,  58%,  53%)'};
    border: ${(props) =>
      props.primaryColor ? props.primaryColor : 'hsl(181,  58%,  53%)'};
  }

  .bot-container {
    margin-bottom: 8px;
    width: 100% !important;
  }
  .spinner-container {
    display: grid;
    place-items: center;
    height: 100%;
  }
  @media (max-width: 900px) {
    .widget-popover {
      width: 100%;
    }
  }
`;
