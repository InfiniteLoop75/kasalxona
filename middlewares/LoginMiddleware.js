module.exports = {
    isAuthenticated = function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }else{
            console.log('Not logged in');
        }
    }
}