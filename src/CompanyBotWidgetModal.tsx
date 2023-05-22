import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
    Button,
    Element,
    Heading,
    Text,
    FormWrapper,
    InputField,
    Card,
    HRule,
} from "fictoan-react";

import SetuBotPreview from "./components/CompanyBotPreview/CompanyBotPreview";
// import { getPromptResults } from '../services/get-prompt-results';

interface SetuBotWidgetModalProps {
    closeModal: () => void;
    description?: string;
    heading?: string;
    projectKey: string;
}
const SetuBotWidgetModal = ({
    closeModal,
    projectKey,
    heading,
    description,
}: SetuBotWidgetModalProps) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState<string | null | unknown>("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [references, setReferences] = useState([]);
    const [wasYesClicked, setWasYesClicked] = useState(false);
    const [wasNoClicked, setWasNoClicked] = useState(false);
    const [contextText, setContextText] = useState(
        heading
            ? heading + ` is generating your answer, please wait...`
            : "CompanyBot is generating your answer, please wait..."
    );

    useEffect(() => {
        setTimeout(() => {
            setWasNoClicked(false);
            setWasYesClicked(false);
        }, 5000);
    }, [wasNoClicked, wasYesClicked]);

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     setError("");
    //     setIsLoading(true);
    //     setIsSearching(true);
    //     // getPromptResults(projectKey, question)
    //     //   .then((res) => {
    //     //     setAnswer(res[1]);
    //     //     setReferences(res[0]);
    //     //     setIsSearching(false);
    //     //     setIsLoading(false);
    //     //   })
    //     //   .catch((err) => {
    //     //     setError("Sorry, I'm currently not able to answer your question");
    //     //     setIsLoading(false);
    //     //     setIsSearching(false);
    //     //   });
    // };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        setIsSearching(true);

        try {
            const res = await fetch(
                `https://api.markprompt.com/v1/completions`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt: question,
                        model: "gpt-4",
                        iDontKnowMessage:
                            "Sorry, LegalBot is currently not able to answer your question",
                        projectKey: "sk_test_6UdTwE0lPnUlpFpEGNJbmoL6Ihwat7BT",
                    }),
                }
            );

            if (!res.ok || !res.body) {
                const text = await res.text();
                console.error("Error:", text);
                setAnswer(
                    "Sorry, LegalBot is currently not able to answer your question"
                );
                return;
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let startText = "";
            let didHandleHeader = false;
            let refs = [];

            setIsSearching(false);

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value);

                if (!didHandleHeader) {
                    startText = startText + chunkValue;
                    if (startText.includes("___START_RESPONSE_STREAM___")) {
                        const parts = startText.split(
                            "___START_RESPONSE_STREAM___"
                        );
                        try {
                            refs = JSON.parse(parts[0]);
                        } catch {}
                        setAnswer((prev: any) => prev + parts[1]);
                        didHandleHeader = true;
                    }
                } else {
                    setAnswer((prev: any) => prev + chunkValue);
                }
            }
            setReferences(refs);
            setIsLoading(false);
            setContextText("Here is what LegalBot came up with:");
        } catch (e) {
            console.error("Error", e);
            setAnswer(
                "Sorry, LegalBot is currently not able to answer your question"
            );
        }

        // initProgess = 0;
        // setProgress({
        //     value: 0,
        //     text: stepsinSetuBot[0],
        // });
        // moveProgressBar();
        // mixpanel.track("SetuBot question", {
        //     question: question,
        // });
        // cmsService
        //     .getPromptResults({ prompt: question })
        //     .then((res) => {
        //         parseMDX(res.answer, res.refs);
        //     })
        //     .catch((err) => {
        //         setError(
        //             "Sorry, SetuBot is currently not able to answer your question"
        //         );
        //         setIsLoading(false);
        //         setIsSearching(false);
        //     });
    };

    return (
        <Card
            className="widget-popover"
            shape="rounded"
            padding="micro"
            shadow="hard"
        >
            <Element as="div" className="full-width" marginBottom="nano">
                <Element
                    as="span"
                    marginRight="nano"
                    className="back-icon"
                    onClick={() => {
                        closeModal();
                    }}
                >
                    ← Back
                </Element>
                <Heading as="h4" marginBottom="micro" marginTop="micro">
                    Ask {heading || "CompanyBot"}
                    <br />
                    <Text size="micro" marginTop="nano">
                        {description || "Get answers regarding our company"}
                    </Text>
                </Heading>

                <FormWrapper onSubmit={handleSubmit}>
                    <InputField
                        placeholder="Enter any question you need answers for"
                        type="text"
                        className="input-field"
                        value={question}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setQuestion(e.target.value);
                            setAnswer("");
                        }}
                    />

                    <Button
                        kind="primary"
                        shape="rounded"
                        shadow="hard"
                        isFullWidth
                        isLoading={isLoading}
                        disabled={question === ""}
                        className="submit-button"
                    >
                        Ask {heading || "CompanyBot"}
                    </Button>
                </FormWrapper>
                {error !== "" && <Text marginTop="micro">{error}</Text>}
                {isSearching ? (
                    <Text marginTop="nano">
                        {heading || "CompanyBot"} is thinking...
                    </Text>
                ) : null}
                {answer && !isSearching ? (
                    <>
                        <Element
                            as="div"
                            marginTop="micro"
                            marginBottom="micro"
                        >
                            <Text weight="600">{contextText}</Text>
                            <br />
                            <SetuBotPreview mdx={answer} />
                        </Element>
                    </>
                ) : null}
            </Element>
        </Card>
    );
};

export default SetuBotWidgetModal;
