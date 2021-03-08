const { Client } = require("discord.js");
const client = new Client();

class Command {
  constructor(
    client,
    {
      name = null,
      description = "No desc provided.",
      category = "Uncategorized",
      usage = "No usage provided",
      aliases = new Array(),
      permLevel = new Array(),
    }
  ) {
    this.client = client;
    this.settings = {
      name,
      description,
      category,
      usage,
      aliases,
      permLevel,
    };
  }

  async exec(message) {
    Object.assign(this, { Embed });

    try {
      await this.run(message, Embed);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Command;
