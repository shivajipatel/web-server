var express =   require("express");
var app     =   express();
var PORT    =   3000;

var middleware =  {
    requiredAuthentication: function(req,res,next){
        console.log('Private route hit!');
        next();
    },
    logger: function(req,res,next){
        console.log(req.method+' '+req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about',middleware.requiredAuthentication,function(req,res){
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
    console.log('Express Server Started on port '+PORT+'!');
});