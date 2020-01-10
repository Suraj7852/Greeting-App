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
                callback(null, {message: "डेटाबेस में सेव हो गया", result})
            }
        });
    }

    find(data, callback) {
        GreetingUser.findById(data, (err, result) => {
            if (err)
                callback(err);
            else {
                if (result) {
                    callback(null, {result, message: "मैसेज प्राप्त हो गया"});
                } else
                    callback({message: "Wrong id"});
            }
        })
    }

    findAll(data, callback) {
        GreetingUser.find({}, (err, result) => {
            if (err)
                callback(err);
            else {
                let allMessage = result.map(message => {
                    return message.message;
                });
                callback(null, {result: allMessage, message: "सभी मैसेज मिल गया"});
            }
        })
    }

    editMessage(idField, updateField, callback) {
        GreetingUser.updateOne(idField, updateField, (err, result) => {
            if (err)
                callback(err);
            else {
                callback(null, {result, message: "अपडेट हो गया"});
            }
        })
    }

    deleteMessage(data, callback) {
        GreetingUser.deleteOne(data, (err, result) => {
            if (err)
                callback(err);
            else {
                callback(null, {result:result, message:"डिलीट हो गया है"});
            }
        })
    }
}

module.exports = new greetingModel();