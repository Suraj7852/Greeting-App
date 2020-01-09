const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
var GreetingUser = mongoose.model('greetings', schema);

class greetingModel {
    register(data, callback) {
        let greetings = new GreetingUser({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "message": data.message
        });
        greetings.save((err, result) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, {message: "saves into data base", result})
            }
        });
    }

    find(data, callback) {
        GreetingUser.findById(data, (err, result) => {
            console.log(data)
            if (err)
                callback(err);
            else {
                if (result) {
                    callback(null, result);
                } else
                    callback({message: "Wrong id"});
            }
        })
    }
}

module.exports = new greetingModel();