const service = require('../service/greetingService');

class GreetingController {
    registerController(req, res) {
        let responseResult = {};
        var registerObj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        };
        service.registerService(registerObj, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "Registration success";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    findController(req, res) {
        let responseResult = {};
        var findObj = {
            _id: req.params.id
        };
        service.findService(findObj, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "message found";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    findAllController(req, res) {
        let responseResult = {};
        service.findAllService({}, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "got all messages";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }
}

module.exports = new GreetingController();