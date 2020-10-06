const express = require('express');
const bodyParser = require('body-parser');  
const {conversation} = require('@assistant/conversation');

const app = conversation();

app.handle('start_scene_initial_prompt', (conv) => {

  console.log('Start scene: initial prompt');
 // conv.overwrite = false;
  conv.scene.next = { name: 'SecondScene' };
  conv.add('Hello world from fulfillment');
});


app.handle('adding_number', (conv) => {

    var { num1, num2 } = conv.session.params;
    conv.session.params.total = num1 + num2;
    //conv.overwrite = false;
    //conv.scene.next = { name: 'actions.scene.END_CONVERSATION' };
    conv.add('Total value is ' + conv.session.params.total);
  });
  





express().use(bodyParser.json(), app).listen(3000);
console.log('web server start...');



//https://developers.google.com/assistant/conversational/df-asdk/reference/nodejsv2/overview
//https://developers.google.com/assistant/conversational/webhooks?tool=builder

/*
const expressApp = express().use(bodyParser.json());

expressApp.post('/fulfillment', app);

expressApp.listen(3000);



*/