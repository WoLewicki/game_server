var mongoose = require('mongoose');

var patientsSchema = new mongoose.Schema({
    name: String,
    pesel: {
        type: String,
        unique : true,
        dropDups: true,
        validate: {
            isAsync: true,
            validator: function(v, cb) {
                setTimeout(function() {
                    var phoneRegex = /^\d{11}$/;
                    var msg = v + ' is not a valid pesel number!';
                    // First argument is a boolean, whether validator succeeded
                    // 2nd argument is an optional error message override
                    cb(phoneRegex.test(v), msg);
                }, 5);
            },
            // Default error message, overridden by 2nd argument to `cb()` above
            message: 'Wrong pesel'
        },
        required : true
    }
});

module.exports = mongoose.model('Patients', patientsSchema);