// V Guardian Project
// This project is lead by vrl#8298

const { TOKEN } = require("../handlers/secrets");
const { prefix } = require("../handlers/config");
const fs = require("fs");
const { Client, Message } = require("discord.js");
const client = new Client();
const message = new Message();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login(TOKEN);
