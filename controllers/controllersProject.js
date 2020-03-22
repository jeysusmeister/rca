exports.login = (req, res)=>{
    res.render('login',{
        'pageTitle':'Login'
    });
}

exports.validarLogin = (req, res)=>{
 
    console.log("valor: ", req.body);
}

exports.olvidoclave = (req,res)=>{
    res.render('forgot');
}