# CompanyBot

CompanyBot is an open-source plug-n-play knowledge companion for your company

Using [Markprompt](https://markprompt.com) by [Motif](https://motif.land/), train GPT models with your documentation/knowledge base and help customers get their queries answered with ease.

Check out the [demo](https://demo-company-bot-sigma.vercel.app/)

[![Version](https://img.shields.io/npm/v/@setu/company-bot?color=%2320014B)](https://www.npmjs.org/package/@setu/company-bot)
[![Downloads](https://img.shields.io/npm/dw/@setu/company-bot?color=%23FEB452)](https://www.npmjs.org/package/@setu/company-bot)
[![License](https://img.shields.io/npm/l/@setu/company-bot?color=%23FE90A0)](LICENSE.md)

<img src="https://user-images.githubusercontent.com/9695866/244606335-f6521b46-2091-449b-95c9-f60cde8c9d44.png" alt="JSX code" width="100%" />

## Getting started

### 1. Setup Markprompt

Visit [Markprompt](https://markprompt.com)

- Setup your account and create a project
- Upload your data in the `Data` section and start training
- Supported formats for your data are `.mdx` `.md` `.txt` `.html`

Read more about training your data [here](https://markprompt.com/docs#processing-your-content)

<img src="https://user-images.githubusercontent.com/9695866/244606089-ab70738e-3756-4781-8021-cb6bfbe06c9a.png" alt="Markprompt Data" width="100%" />

### 2. Obtain project keys

- Once training is complete, head to the `Settings` section and add `docs.setu.co` in the Whitelisted domains section.

- Obtain the `Production` project key which will be used in the CompanyBot widget

<img src="https://user-images.githubusercontent.com/9695866/244606072-6f5d7d1d-aeae-4952-813a-49ae63d91258.png" alt="Markprompt Settings" width="100%" />

### 3. Install the package

- npm

```bash
npm install @setu/company-bot
```

- yarn

```bash
yarn add @setu/company-bot
```

### 4. Import CompanyBot

```js
// pages/_app.js

import { CompanyBot } from '@setu/company-bot';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CompanyBot projectKey="YOUR_PROJECT_KEY" />
      <Component {...pageProps} />
    </>
  );
}
```

## Options

These options can be passed as props

| prop          | type   | description                                     | default                           | required |
| ------------- | ------ | ----------------------------------------------- | --------------------------------- | -------- |
| name?         | string | Name of the knowledge bot                       | CompanyBot                        | FALSE    |
| helperText?   | string | Give more context about the bot                 | Get answers regarding our company | FALSE    |
| primaryColor? | string | Primary color of the bot                        | #CBD9E7                           | FALSE    |
| projectKey    | string | Production primary key obtained from Markprompt | N/A                               | TRUE     |

> Note: `primaryColor` should be passed as HEX code without the hash (#)

## Example

Let's use

- ![#6B92BA](https://via.placeholder.com/15/6B92BA/000000?text=+) `#6B92BA as primaryColor`

```js
<CompanyBotWidget
  heading="TestBot"
  description="Ask any question and TestBot will help you"
  primaryColor="6B92BA"
  projectKey="XXXX-XXXX-XXXX-XXXX"
/>
```

You can play around with the bot in this [demo](https://demo-company-bot-sigma.vercel.app/)

## License

MIT. Have at it.
