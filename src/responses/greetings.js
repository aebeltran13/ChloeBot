module.exports = {
    handleGreeting: (message) => {
        const greetings = [
            'Hey Pookie 💋',
            'Hi sweety 💕',
            'Hola lola 🧍🏼‍♀️',
            'Whats up queerzilla! 🦎',
            'Hey guuwrrrl! 💗',
            'Hiiiii 🥰',
            'Hey gay! 🦄',
            'Heyyy, how r u!',
            'Oh wow... ok. Hiiii',
            'Oi!',
            'Howdy!',
            'Guid mornin',
            'Guid eenin',
            'How\'s it gauin?'
        ];

        const greetingPhrases = [
            'hey chloe', 
            'hi chloe',
            'hello chloe',
            'hola chloe'
        ];
        const messageContentLower = message.content.toLowerCase();
        const hasGreeting = greetingPhrases.some((phrase) => messageContentLower.includes(phrase));

        // Select random greeting
        if(hasGreeting){
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            // Respond with selected message
            message.reply(randomGreeting);
        }

    }
};