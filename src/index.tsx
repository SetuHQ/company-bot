import React, { useState } from "react";
import { Button, ThemeProvider } from "fictoan-react";
import { CompanyBotWidgetStyled } from "./CompanyBotWidget.styled";
import { ChatBot } from "./assets/icons/ChatBot";
import CompanyBotWidgetModal from "./CompanyBotWidgetModal";
import { CompanyBotLightTheme } from "./assets/CompanyBot.light.theme";

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
        <ThemeProvider theme={CompanyBotLightTheme}>
            <CompanyBotWidgetStyled>
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
                        <CompanyBotWidgetModal
                            closeModal={closeModal}
                            {...props}
                        />
                    ) : null}
                </div>
            </CompanyBotWidgetStyled>
        </ThemeProvider>
    );
}
