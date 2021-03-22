import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import request from "request-promise";
dotenv.config();
import { config } from './config/config';
const PORT = process.env.PORT || 6100;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>✔</h1>');
});

const formatTweet = (tweetMessage: string) => ({
  url: config.tweetUrl,
  oauth: config.twitterOauth,
  json: true,
  formData: {
    status: tweetMessage
  }
})

app.post('/create/tweet', async (req: Request, res: Response) => {
  try {
    await request.post(formatTweet(req.body.tweetMessage));
    res.sendStatus(200)
  } catch (error) {
    res.send(error)
  }
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));