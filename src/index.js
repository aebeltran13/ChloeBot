const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`👧🏼 ${c.user.tag} has awoken...`);
})

client.on('messageCreate', (msg) =>{
    // Check if message is by human
    if(msg.author.bot){
        return;
    }

    if (msg.content == 'Hello'){
        msg.reply('Hey Pookie');
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);
