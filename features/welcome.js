module.exports = function(controller) {



        controller.on('hello', async(bot, message) => {
            // do something!
            await bot.reply(message, '¡Bienvenido al CharBot!');
            await bot.say({
                text: '¿Que quieres hacer?',
                typing:true,
                quick_replies: [
                  {
                    title: 'Ver Menú Principal',
                    payload: 'menu',
                  },
                  {
                    title: 'Ver Preguntas Frecuentes',
                    payload: 'preguntas',
                  }
                ]
              });
        });

        controller.on('welcome_back', async(bot, message) => {
            // do something!
            await bot.reply(message, '¡Bienvenido de vuelta!');
            await bot.say({
                text: '¿Que quieres hacer?',
                typing:true,
                quick_replies: [
                  {
                    title: 'Ver Menú Principal',
                    payload: 'menu',
                  },
                  {
                    title: 'Ver Preguntas Frecuentes',
                    payload: 'preguntas',
                  }
                ]
              });
        });



}