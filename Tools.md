# Websites to use during development

## Design

### Color palette generator

- colors: https://coolors.co/
- colorSpace: https://mycolor.space/

- huemint

  - https://huemint.com/
  - https://huemint.com/brand-intersection/
  - https://huemint.com/website-magazine/

- realtime colors

  - https://realtimecolors.com/
  - Youtube Tutorial: https://www.youtube.com/watch?v=HAlIWRcldoc

## Images

To get png icons/Animated or Interface Icons
Download Free Icons and Stickers for your projects. (MP4, gif, png)

- Icons: https://www.flaticon.com/

- To Remove Background From an Image: https://www.remove.bg/

- To conver PNG to SVG import image in figma and export as SVG, https://www.figma.com/

For stock photos

- https://pixabay.com/
- https://www.pexels.com/
- https://unsplash.com/

## Fonts

- Fonts in the wild: https://www.fontsinthewild.com/

## 2D Illustrations

Recomended for small images and illustrations

- icons8: https://icons8.com/

- Illistrations: https://icons8.com/illustrations/business/service/delivery
  - Group of friends: https://icons8.com/illustrations/t/group-of-friends
  - Office: https://icons8.com/illustrations/t/office
  - Team Meeting: https://icons8.com/illustrations/t/team-meeting

For better quality illistrations,

- Sapiens: https://sapiens.ui8.net/6m3o3w8
- Lottie for React: https://lottiereact.com/

From Sapiens you can export svg and modify colours.

### You can change colurs from the svg file by changing the `fill` value.

- Open SVG image in VS Code,
- Search for `fill` value
- change colour value where you need to update,
- Open the SVG file and verify

## 3D Illustrations

- Spline: https://spline.design/

  - 3D Text
  - Interactive 3D Models
  - Game Control and Physics

- Spline Youtube: https://www.youtube.com/@splinetool
- Spline Designe Tutorial: https://www.youtube.com/watch?v=rfqxhriBodc
- Spline React Tutoral: https://www.youtube.com/watch?v=EJxeMbDTkVI

## UI Components

- chakra: https://chakra-ui.com/docs/components
- shadcn: https://ui.shadcn.com/
- mui: https://mui.com/components/
- ang design: https://ant.design/components/overview

## Code Generators

- webfloc: https://webflow.com/

  - Design and Export HTML/CSS: https://webflow.com/designer

- locofy: https://www.locofy.ai/

  - Figma to React: https://www.locofy.ai/convert/figma-to-react
  - Locofy Tutorial: https://www.youtube.com/watch?v=6UIfbJfz1jI

- framer: https://framer.com/

  - with framer you will be able to genrate and design the website on framer studio
  - framer ai genrater can genrate template website with your given description

## Logo design

- Canva: https://www.canva.com/
- https://logomaster.ai/
- https://logomakr.com/
- https://www.freelogodesign.org/

## Authentication

- Firebase Authentication: https://firebase.google.com/docs/auth
- Auth0: https://auth0.com/

## Deployment

- Render: https://render.com/
- Netlify: https://www.netlify.com/
- Vercel: https://vercel.com/
- AWS Amplify: https://aws.amazon.com/amplify/
  - AWS Amplify provides a set of tools and services for building full-stack serverless web applications, including authentication and deployment.
- DigitalOcean: https://www.digitalocean.com/
  - DigitalOcean is a cloud infrastructure provider that offers hosting solutions for deploying React applications.

## Storing Media

- Cloudinary: https://cloudinary.com/
  - Youtube tutorial: https://www.youtube.com/watch?v=paiO6M2wBqE
- AWS S3: https://aws.amazon.com/s3/
  - How to sign up for AWS free tier: https://www.youtube.com/watch?v=SFaSB6vgp8k

## Payment Gateways

- Razorpay: https://razorpay.com/docs/#home-payments

  - Key Features: Supports a wide range of payment methods, including credit/debit cards, net banking, UPI, and wallets. Offers easy integration with a well-documented API.

- Cashfree: https://docs.cashfree.com/

  - Key Features: Supports a range of payment options, including UPI, cards, and wallets. Offers easy integration and advanced features like instant settlements.

- Paytm: https://business.paytm.com/docs

  - Key Features: Offers a popular digital wallet and payment gateway. Supports various payment methods, including Paytm Wallet, UPI, and cards.

## React Chart Libraries

- react-chartjs-2: https://react-chartjs-2.js.org/
- nivo: https://nivo.rocks/
- Recharts: https://recharts.org/en-US/
- React Charts: https://react-charts.tanstack.com/

## Firebase

- Firebase: https://firebase.google.com/
- Youtube Tutotrial: https://www.youtube.com/watch?v=Ab1HonXMKNM
- React Firebase Article: https://codedamn.com/news/reactjs/react-firebase-complete-tutorial

## Cron Job

- A "cron job" is like a task scheduler for your computer or server. Imagine you have a to-do list of tasks you want your computer to do regularly, like sending you a daily weather report or cleaning up old files. Instead of doing these tasks manually every day, you can set up a cron job to do them automatically at specific times or intervals.

- So, a cron job is like a little helper that follows a schedule you've set and takes care of repetitive tasks for you, making your life easier by automating routine jobs on your computer or server.

- Using a cron job to call an API once daily is a smart way to manage limited API calls. Here's a simple explanation of how it works:

  1. **Setting a Schedule**: You set up a schedule for your computer or server to automatically make a request to the API once a day. This schedule is like an alarm clock for your computer, telling it when to make the API call.

  2. **API Request**: When the scheduled time arrives (e.g., every day at a specific time), your computer wakes up and sends a request to the API. It's like your computer making a phone call to the API server to ask for information.

  3. **Data Retrieval**: The API server receives the request, processes it, and sends back the data you need. For example, it might provide you with daily weather updates, news, or any other information you requested.

  4. **Automation**: The great thing is that you don't have to manually make this API call every day. The cron job automates this task for you, ensuring that you get your daily data without having to remember to do it yourself.

  By using a cron job, you can make the most of your limited API calls by fetching the data you need on a regular schedule, such as once daily, while saving time and effort.

- To create a cron job in Node.js, you can use the popular `node-cron` library. Here's an example of how to create a simple cron job in Node.js:

First, make sure you have Node.js installed on your system. Then, follow these steps:

1. Create a new Node.js project and navigate to its directory in your terminal.

2. Install the `node-cron` library using npm or yarn:

```bash
npm install node-cron
# or
yarn add node-cron
```

3. Create a JavaScript file (e.g., `cronJob.js`) to write your cron job code.

4. In `cronJob.js`, write the code for your cron job. For example, let's create a cron job that logs a message every day at a specific time (8:00 AM):

```javascript
const cron = require("node-cron");

// Schedule the cron job to run every day at 8:00 AM
cron.schedule("0 8 * * *", () => {
  console.log("Cron job executed at 8:00 AM daily.");
});
```

In the above code:

- We import the `node-cron` library.
- We use the `cron.schedule` function to define the schedule. `'0 8 * * *'` represents the cron expression for running the job at 8:00 AM every day.

5. Save the `cronJob.js` file.

6. Run your cron job script using Node.js:

```bash
node cronJob.js
```

Your cron job will now execute at the specified time each day and log the message.

You can replace the log message with any code you want to run as part of your cron job, such as making API requests or performing other tasks. Just make sure to adjust the schedule (the cron expression) to match your desired timing.
