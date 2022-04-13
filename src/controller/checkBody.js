module.exports = (req, res,next) => {

    
    if (Object.keys(req.body).length === 0) {
  
        return res.status(400).send({
            erro: true,
            message: 'Missing parameter'

        });
    }else{
        return next()
    }
    
}