const model = require('../model/greetingModel');

class GreetingService {
    registerService(data, callback) {
        let user = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "message": `welcome ${data.firstName} ${data.lastName} to greetingApp`
        };
        model.register(user, (err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }

    findService(data, callback) {
        model.find(data._id, (err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }

    findAllService(data, callback) {
        model.findAll({}, (err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }

    editMessageService(data, callback) {
        let idField = {
            _id: data._id
        };
        let updateField = {
            'message': data.message
        };
        model.editMessage(idField, updateField, (err, result) => {
            if (err)
                callback(err);
            else
                callback(null, result);
        })
    }
}

module.exports = new GreetingService();