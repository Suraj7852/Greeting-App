const service = require('../service/greetingService');

class GreetingController {
    registerController(req, res) {
        let responseResult = {};
        req.checkBody('firstName','first Name is required').notEmpty();
        req.checkBody('lastName','last NAme is required').notEmpty();
        let errors = req.validationErrors();
        if(errors) {
            responseResult.sucess = false;
            responseResult.message = "आपके द्वारा प्राप्त डाटा गलत है";
            responseResult.errors = errors;
            return res.status(422).send(responseResult);
        }else {
            let registerObj = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            };
            service.registerService(registerObj, (err, result) => {
                if (err) {
                    responseResult.sucess = false;
                    responseResult.message = "Validation Error";
                    responseResult.errors = err;
                    return res.status(400).send(responseResult);
                } else {
                    responseResult.sucess = true;
                    responseResult.message = "Registration success";
                    responseResult.result = result;
                    return res.status(200).send(responseResult);
                }
            })
        }
    }

    findController(req, res) {
        let responseResult = {};
        let findObj = {
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

    editMessageController(req, res) {
        let responseResult = {};
        let editObj = {
            _id: req.params.id,
            message: req.body.message
        };
        service.editMessageService(editObj, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "message updated";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }

    deleteMessageController(req, res) {
        let responseResult = {};
        service.deleteMessageService(req.params.id, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                return res.status(422).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "message deleted";
                responseResult.result = result;
                return res.status(200).send(responseResult);
            }
        })
    }
}

module.exports = new GreetingController();