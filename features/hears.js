/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    
      controller.hears('menu','message,direct_message', async(bot, message) => {
        await bot.say({
            text: 'Menú Principal',
            typingDelay:5000,
            quick_replies: [
              {
                title: '1. Primera Opcion',
                payload: 'primera opcion',
              },
              {
                title: '2. Segunda Opcion',
                payload: 'segunda opcion',
              },{
                title: '3. Tercera Opcion',
                payload: 'tercera opcion',
              }
            ]
          });
    });

    // Menu principal


        // Menu principal
        controller.hears('preguntas','message,direct_message', async(bot, message) => {
            await bot.say({
                text: "Puedes consultar las preguntas frecuentes <a href='#'>aqui</a>",
                typingDelay:5000
              });
        });


}