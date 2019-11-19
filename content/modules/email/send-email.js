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
  let total = body.total
  // console.log(req.body)
  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // hostname
      // secureConnection: false,
      service: 'gmail',//smtp.gmail.com  //in place of service use host...
      secure: true,//true
      port: 25,//465
      // port: 465,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      }, tls: {
        rejectUnauthorized: false
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
        nombre: name,
        totalP:total
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