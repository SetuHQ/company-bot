import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import {
  Button,
  Element,
  Heading,
  Text,
  FormWrapper,
  InputField,
  Card,
} from 'fictoan-react';

import SetuBotPreview from '../SetuBotPreview/SetuBotPreview';
import { getPromptResults } from '../services/get-prompt-results';

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
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null | unknown>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [references, setReferences] = useState([]);
  const [wasYesClicked, setWasYesClicked] = useState(false);
  const [wasNoClicked, setWasNoClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWasNoClicked(false);
      setWasYesClicked(false);
    }, 5000);
  }, [wasNoClicked, wasYesClicked]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setIsSearching(true);
    getPromptResults(projectKey, question)
      .then((res) => {
        setAnswer(res[1]);
        setReferences(res[0]);
        setIsSearching(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Sorry, I'm currently not able to answer your question");
        setIsLoading(false);
        setIsSearching(false);
      });
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
          Ask {heading || 'SetuBot'}
          <br />
          <Text size="micro" marginTop="nano">
            Get answers regarding {description || 'anything'}
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
              setAnswer(null);
            }}
          />

          <Button
            kind="primary"
            shape="rounded"
            shadow="hard"
            isFullWidth
            isLoading={isLoading}
            disabled={question === ''}
            className="submit-button"
          >
            Ask SetuBot
          </Button>
        </FormWrapper>
        {error !== '' && <Text marginTop="micro">{error}</Text>}
        {isSearching ? (
          <Text marginTop="nano">SetuBot is thinking...</Text>
        ) : null}
        {answer && !isSearching ? (
          <Element as="div" marginTop="micro" marginBottom="nano">
            <Text weight="600">Here is what SetuBot came up with:</Text>
            <br />
            <SetuBotPreview mdx={answer} />
          </Element>
        ) : null}
      </Element>
    </Card>
  );
};

export default SetuBotWidgetModal;
