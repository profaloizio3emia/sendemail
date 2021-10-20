var server = require('./config/server')
var email = require('./config/email')

var app = server.app

var porta = server.porta

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/',(req,res)=>{
    console.log(req.body)

    email.sendMail({
        from:'profaloizio.3emia@gmail.com',
        to:req.body.email,
        replyTo:'profaloizio.filho@hotmail.com',
        subject:'Teste de envio de email',
        html:'<p>Teste de envio de email para sistema de recuperação de senha</p>'
    })
    .then((result)=>{
        //res.send(result)
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.listen(porta)
