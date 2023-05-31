import React, { useRef, useState } from 'react';
import { CompanyBotWidgetStyled } from './CompanyBotWidget.styled';
import { ChatBot } from '../assets/icons/ChatBot';
import CompanyBotWidgetModal from './CompanyBotWidgetModal';
import { useOnClickOutside } from '../hooks/hooks';

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
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => setOpenModal(false));

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
        <div ref={modalRef}>
          <CompanyBotWidgetModal
            closeModal={closeModal}
            primaryColor={primaryColor}
            {...props}
          />
        </div>
      ) : null}
    </CompanyBotWidgetStyled>
  );
}
