const { ApplicationCommandOptionType } = require("discord.js");
const activeStopwatches = new Map();

module.exports = {
  name:'stopwatch',
  description:'Starts and stops a stopwatch for a user',
  options: [
    {
      name: 'user',
      description: 'The user for the stopwatch',
      required: true,
      type: ApplicationCommandOptionType.User
    }
  ],

  callback: async ( client, interaction) => {
    const { user } = interaction.options.get('user');
    const userID = user.id;

    if (activeStopwatches.has(userID)) {
      // User has active stopwatch -> Need to stop it.
      const startTime = activeStopwatches.get(userID);
      const stopTime = Date.now();
      const timeElapsed = stopTime - startTime;
      activeStopwatches.delete(userID);

      // Reply with users name and time away.
      interaction.reply(`${user.displayName} was away for ${Math.floor(timeElapsed/1000)} seconds.`)
    } else {
      // User doesnt have a stop watch -> Create one
      const startTime = Date.now();
      activeStopwatches.set(userID, startTime);

      interaction.reply(`Stopwatch started for ${user.displayName}.`);
    }
  }
}