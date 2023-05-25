import React, { useState } from 'react';
import { CompanyBotWidgetStyled } from './CompanyBotWidget.styled';
import { ChatBot } from '../assets/icons/ChatBot';
import CompanyBotWidgetModal from './CompanyBotWidgetModal';

export interface CompanyBotWidgetProps {
  description?: string;
  heading?: string;
  primaryColor?: string;
  projectKey: string;
}

export function CompanyBotWidget({
  primaryColor,
  ...props
}: CompanyBotWidgetProps) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <CompanyBotWidgetStyled primaryColor={primaryColor}>
      <div className="feedback-widget">
        <button
          type="button"
          className="feedback-widget-trigger-button"
          onClick={() => setOpenModal(true)}
        >
          <ChatBot />
        </button>
      </div>
      {openModal ? (
        <CompanyBotWidgetModal
          closeModal={closeModal}
          primaryColor={primaryColor}
          {...props}
        />
      ) : null}
    </CompanyBotWidgetStyled>
  );
}
