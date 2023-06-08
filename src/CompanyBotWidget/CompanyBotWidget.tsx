import React, { useState } from 'react';
import { CompanyBotWidgetStyled } from './CompanyBotWidget.styled';
import { GenericIcon } from '../assets/icons/GenericIcon';
import { SetuIcon } from '../assets/icons/SetuIcon';
import CompanyBotWidgetModal from './CompanyBotWidgetModal';

export interface CompanyBotWidgetProps {
  description?: string;
  heading?: string;
  iconBgColor?: string;
  modalColor?: string;
  projectKey: string;
}

export function CompanyBotWidget({
  iconBgColor,
  modalColor,
  heading,
  ...props
}: CompanyBotWidgetProps) {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <CompanyBotWidgetStyled iconBgColor={iconBgColor}>
      <div className="feedback-widget">
        <button
          type="button"
          className="feedback-widget-trigger-button"
          onClick={() => setOpenModal(true)}
        >
          {heading === 'SetuBot' ? <SetuIcon /> : <GenericIcon />}
        </button>
      </div>
      {openModal ? (
        <div>
          <CompanyBotWidgetModal
            closeModal={closeModal}
            modalColor={modalColor}
            heading={heading}
            {...props}
          />
        </div>
      ) : null}
    </CompanyBotWidgetStyled>
  );
}
