const model = require('../model/greetingModel');

class GreetingService {
    registerService(data, callback) {
        let user = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "message": `welcome ${data.firstName} ${data.lastName} to greetingApp`
        };
        model.register(user, (err, result) => {
            if(err)
                callback(err);
            else
                callback(null,result);
        })
    }
}

module.exports = new GreetingService();