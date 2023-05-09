import axios from 'axios';

export const getPromptResults = async (projectKey: string, prompt: string) => {
  const data = JSON.stringify({
    prompt,
    iDontKnowMessage: "Sorry, I'm currently not able to answer your question",
    model: 'gpt-4',
  });

  const endpoint = 'https://api.markprompt.com/completions';
  const config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url: `${endpoint}?projectKey=${projectKey}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  try {
    const response = await axios.request(config);
    if (response) {
      const parts = response.data.split('___START_RESPONSE_STREAM___');
      return parts;
      // resp.status(200).send({ answer: parts[1], refs: parts[0] });
    }
  } catch (error) {
    return error;
  }
};
