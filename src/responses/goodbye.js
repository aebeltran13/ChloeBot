const greetings = require("./greetings");

module.exports = {
    handleGoodbye: (message) => {
        // Phrases to check for and respond with
        const goodbyes = [
            'Bye *Muah* 💋',
            'See you later sweety 💋',
            'Goodbye pookie 💋',
            'Bye twinkie 💋',
            'Have a good one zaddy 💋',
            'Cheerio! ☕',
            'Have a good one',
            'Until next time!',
            'Bon voyage les fwee 🍒',
            'Toodaloo ❣',
            'Live, Laugh, Love',
            'Toodles!',
            'Take care luv 💖',
            'Peace out gurl.',
            'You havent seen the last of me! 😈',
            'Maybe in another lifetime...',
            'xoxo gossip girl',
            'You know you love me XOXO 💋',
            'Adios',
            'Sayonara',
            'Go piss girl!'
        ];
        const goodbyePhrases = [
            'bye chloe',
            'goodbye chloe',
            'goodnight chloe',
            'see you later chloe',
            'see ya later chloe',
            'see ya chloe'
        ];

        //Check if message has a goodbye phrase. Non-Casesensitive
        const messageContentLower = message.content.toLowerCase();
        const hasGoodbye = goodbyePhrases.some((phrase) => messageContentLower.includes(phrase));

        // Select random goodbye and respond if goodbye phrase is detected.
        if(hasGoodbye){
            const randomGoodbye = goodbyes[Math.floor(Math.random() * goodbyes.length)];
            message.reply(randomGoodbye);
        }
    }
}