# Soundboard Chafa

A bot to expand the sounboard limit on discord

## Commands

- Help: run `/help`
- Ping: run `/ping`
- Join: run `/join channel:<channel>`
- Leave: run `/leave`
- Play: run `/play sound:<sound-name>`
- Add: run `/add name:<sound-name> url:<youtube-url>`
- Board: run `board`

## How to run locally

If you want to run locally on your server:

1. Create a discord application on their official webpage.
2. Seed the following .env file:
   ```
    token=<your-discord-bot-token>
    clientId=<your-discord-client-id>
    guildId=<your-server-id>
   ```
3. Install depencies using `npm install`.
4. Use node to run the project: `node index.js`.

> Don't forget to invite your bot with the correct access to your server.

## Tools

This bot was created using Javascript, other libraries used are:

- DiscordJS
- ytdl-core
