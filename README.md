# Super Simple Next.js React App

Feel free to use this tutorial I created using Next.js.
I've created this from scratch (yep! no AI 😜) for someone who is looking for a minimalist app sample that also incudes calling a web service via REST, Next.js fundamentals, TailwindCss and MUI core.

## Key Learning
- Next.js Basics including routing, layout, SSR & client-side rendering
- Authentication via AWS Cognito, Amplify
- TailwindCSS utility classes
- Material UI - components, themes

Some core pre-requisites:

1. AWS

- AWS CLI
- Amplify CLI
- Cognito

2. ReactJS
3. MUI
4. TailwindCSS
5. json-server

## Setup
```bash
npm install
```

## Web App

To run the web app server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mock API server

To run the api server (saves to a local database json file):

```bash
npm run api
```

Open [http://localhost:3010/employees](http://localhost:3010/employees) with your browser or Postman to see the data.

## Run both to test the app

To run the api server (saves to a local database json file):

```bash
npm run both
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
