const {
  Router
} = require('express');
const sendconfirmation = new Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const path = require('path');
sendconfirmation.post('/send-notification', function (req, res) {
  var body = req.body;
  let email = body.email;
  let name = body.name;
  async function main() {
    let transporter = nodemailer.createTransport({
      host: "imap.gmail.com", // hostname
      secure: false,
      port: 993,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      }
    });
    var options = {
      viewEngine: {
        extname: '.hbs',
        layoutsDir: 'content/template/',
        defaultLayout: 'Compra',
        partialsDir: 'content/template/Compra'
      },
      viewPath: 'content/template/',
      extName: '.hbs'
    };
    transporter.use('compile', hbs(options));
    transporter.sendMail({
      from: process.env.Email,
      to: email,
      subject: `LabCode Notificacion de compra `,
      template: 'Compra',
      context: {
        name: name
      }
    }, function (error, response) {
      console.log(error)
      console.log('response')
      transporter.close();
    })

  }
  main().catch(console.error);
  res.sendStatus(200)
  res.end()
})
module.exports = sendconfirmation;