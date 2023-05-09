import React, { useState } from 'react';
import { Button, ThemeProvider } from 'fictoan-react';
import { SetuBotWidgetStyled } from './SetuBotWidget.styled';
import { ChatBot } from '../assets/icons/ChatBot';
import SetuBotWidgetModal from './SetuBotWidgetModal';
import { SetuLightTheme } from '../../assets/Setu.light.theme';

export interface SetuBotWidgetProps {
  description?: string;
  heading?: string;
  primaryColor?: string;
  projectKey: string;
}

export function SetuBotWidget({ primaryColor, ...props }: SetuBotWidgetProps) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <ThemeProvider theme={SetuLightTheme}>
      <SetuBotWidgetStyled primaryColor={primaryColor}>
        <div className="feedback-widget">
          <Button
            className="feedback-widget-trigger-button"
            size="small"
            shadow="hard"
            onClick={() => setOpenModal(true)}
          >
            <ChatBot />
          </Button>
          {openModal ? (
            <SetuBotWidgetModal closeModal={closeModal} {...props} />
          ) : null}
        </div>
      </SetuBotWidgetStyled>
    </ThemeProvider>
  );
}
