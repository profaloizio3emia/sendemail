var nodemailer = require('nodemailer')

var email = "profaloizio.filho@hotmail.com"
var senha = "Teste1234$"

var transporter = nodemailer.createTransport({
    host:'smtp.office365.com',
    port:'587',
    auth:{user:email,pass:senha}
})

module.exports = transporter