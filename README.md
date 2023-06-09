# CompanyBot

CompanyBot is an open-source plug-n-play knowledge companion for your company

Using [Markprompt](https://markprompt.com) by [Motif](https://motif.land/), train GPT models with your documentation/knowledge base and help customers get their queries answered with ease.

Check out the [demo](https://demo-company-bot.vercel.app/)

[![Version](https://img.shields.io/npm/v/@setu/company-bot?color=%2320014B)](https://www.npmjs.org/package/@setu/company-bot)
[![Downloads](https://img.shields.io/npm/dw/@setu/company-bot?color=%23FEB452)](https://www.npmjs.org/package/@setu/company-bot)
[![License](https://img.shields.io/npm/l/@setu/company-bot?color=%23FE90A0)](LICENSE.md)

![code-jsx](https://github.com/SetuHQ/company-bot/assets/9695866/1d6b77fd-aef2-493b-b38b-bbf2335a75dd)


## Getting started

### 1. Setup Markprompt

Visit [Markprompt](https://markprompt.com)

- Setup your account and create a project
- Upload your data in the `Data` section and start training
- Supported formats for your data are `.mdx` `.md` `.txt` `.html`

Read more about training your data [here](https://markprompt.com/docs#processing-your-content)

<img src="https://github.com/SetuHQ/company-bot/assets/9695866/f81917bf-c894-4670-af06-7475033d6dbe" alt="Markprompt Data" width="100%" />

### 2. Obtain project keys

- Once training is complete, head to the `Settings` section and add `docs.setu.co` in the Whitelisted domains section.

- Obtain the `Production` project key which will be used in the CompanyBot widget

<img src="https://github.com/SetuHQ/company-bot/assets/9695866/14ad3292-6e95-435c-8e05-ec04e39d9ce0" alt="Markprompt Settings" width="100%" />

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

You can play around with the bot in this [demo](https://demo-company-bot.vercel.app/)

## License

MIT. Have at it.
