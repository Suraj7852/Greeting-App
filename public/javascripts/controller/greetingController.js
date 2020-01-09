const service = require('../service/greetingService');

class GreetingController {
    registerController(req,res) {
        let responseResult = {};
        var registerObj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        };
        service.registerService(registerObj,(err, result) => {
            if(err){
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            }else{
                responseResult.sucess = true;
                responseResult.message = "Registration success";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }
}
module.exports = new GreetingController();