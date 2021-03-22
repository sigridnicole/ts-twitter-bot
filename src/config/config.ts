export const config = {
  twitterOauth: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    token: process.env.ACCESS_TOKEN,
    token_secret: process.env.ACCESS_TOKEN_SECRET
  },
  twitterEnv: process.env.TWITTER_DEV_ENV,
  tweetUrl: 'https://api.twitter.com/1.1/statuses/update.json'
}