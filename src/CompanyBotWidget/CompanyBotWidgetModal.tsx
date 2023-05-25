// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Spinner } from '../components/Spinner/Spinner';

interface CompanyBotWidgetModalProps {
  closeModal: () => void;
  description?: string;
  heading?: string;
  primaryColor?: string;
  projectKey: string;
}
const CompanyBotWidgetModal = ({
  closeModal,
  projectKey,
  heading,
  description,
  primaryColor,
}: CompanyBotWidgetModalProps) => {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [wasYesClicked, setWasYesClicked] = useState(false);
  const [wasNoClicked, setWasNoClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setWasNoClicked(false);
      setWasYesClicked(false);
    }, 5000);
  }, [wasNoClicked, wasYesClicked]);

  return (
    <div className="widget-popover">
      <div className="bot-container">
        <button
          type="button"
          className="back-icon"
          onClick={() => {
            closeModal();
          }}
        >
          ← Back
        </button>
        {iframeLoading && (
          <div className="spinner-container">
            <Spinner primaryColor={primaryColor} />
          </div>
        )}

        <iframe
          id="ai-bot-iframe"
          title="ai-bot-widget"
          src={`http://localhost:3000/bot-widget?projectKey=${projectKey}&heading=${
            heading || 'CompanyBot'
          }&description=${
            description || 'Get answers regarding our company'
          }&primaryColor=${primaryColor || '42CACD'}`}
          style={{ width: '100%', height: '100%', border: 'none' }}
          onLoad={(e) => {
            setIframeLoading(false);
          }}
        />
      </div>
    </div>
  );
};

export default CompanyBotWidgetModal;
