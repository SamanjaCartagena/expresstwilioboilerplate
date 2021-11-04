//dependencies

///yarn add express cors twilio
const express = require('express');
const cors = require('cors');
const  twilio = require('twilio');

//twilio requirement -- Texting API

const accountSid = "";
const authToken ="";
const client = new twilio(accountSid, authToken);

const app = express();

app.use(cors());

//Welcome page for the server
app.get('/',(req, res) => {
    res.send('Welcome the server')
});

//twilio text
app.get('/send-text', (req, res) =>{
//Get variables passed via query string
const {recipient, textmessage} = req.query

//Send text
client.messages.create({
    body:textmessage,
    to:'+1'+recipient,
    from: '+12098022190' //from twilio
}).then((message) => console.log(message.body));

})
//must have nodemon installed
app.listen(4000, () => console.log('running on port 4000'));