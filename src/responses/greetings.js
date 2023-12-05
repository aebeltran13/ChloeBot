module.exports = {
    handleGreeting: (message) => {
        const greetings = [
            'Hey Pookie 💋',
            'Hi sweety 💕',
            'Hola lola 🧍🏼‍♀️'
        ];

        const greetingPhrases = ['hey chloe', 
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