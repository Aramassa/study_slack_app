const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

/* Add functionality here */

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, client, context }) => {
    // say() sends a message to the channel where the event was triggered
    // await say(`Hey there <@${message.user}>!`);
    console.log(message);
    console.log(context);

    // if(message.user != context.botUserId){ // このif文は不要。Bot自身が送ったメッセージに対してはイベントトリガーされないため。
        client.chat.postMessage({
            text: "Helloooo hello",
            channel: message.channel,
            thread_ts: message.ts
        })
    // }

  });

(async () => {
  // Start the app
  await app.start();

  console.log('⚡️ Bolt app is running!');

})();