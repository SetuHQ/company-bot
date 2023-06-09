import React, { useState } from 'react';
import { CompanyBotWidgetStyled } from './CompanyBotWidget.styled';
import { SetuIcon } from '../assets/icons/SetuIcon';
import { GenericIcon } from '../assets/icons/GenericIcon';
import CompanyBotWidgetModal from './CompanyBotWidgetModal';

export interface CompanyBotWidgetProps {
  helperText?: string;
  name?: string;
  primaryColor?: string;
  projectKey: string;
}

export function CompanyBotWidget({
  primaryColor,
  name,
  ...props
}: CompanyBotWidgetProps) {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <CompanyBotWidgetStyled primaryColor={primaryColor}>
      <div className="company-bot">
        <button
          type="button"
          className="company-bot-button"
          onClick={() => setOpenModal(true)}
        >
          {name === 'SetuBot' ? (
            <SetuIcon />
          ) : (
            <GenericIcon color={primaryColor || '6B92BA'} />
          )}
        </button>
      </div>
      {openModal ? (
        <div>
          <CompanyBotWidgetModal
            closeModal={closeModal}
            primaryColor={primaryColor}
            name={name}
            {...props}
          />
        </div>
      ) : null}
    </CompanyBotWidgetStyled>
  );
}
