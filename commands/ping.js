class ping new command {
  constructor(cmdCall) {
    this.client = cmdCall;
  }
  async run(message) {
    message.reply('pong');
  }
}
module.exports=ping;