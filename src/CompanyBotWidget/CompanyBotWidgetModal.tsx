// @ts-nocheck
import React, { useState } from 'react';
import { Spinner } from '../components/Spinner/Spinner';

interface CompanyBotWidgetModalProps {
  closeModal: () => void;
  helperText?: string;
  name?: string;
  primaryColor?: string;
  projectKey: string;
}
const CompanyBotWidgetModal = ({
  closeModal,
  projectKey,
  name,
  helperText,
  primaryColor,
}: CompanyBotWidgetModalProps) => {
  const [iframeLoading, setIframeLoading] = useState(true);

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
          src={`https://docs.setu.co/bot-widget?projectKey=${projectKey}&heading=${
            name || 'CompanyBot'
          }&description=${
            helperText || 'Get answers regarding our company'
          }&primaryColor=${primaryColor || '6b92ba'}`}
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
