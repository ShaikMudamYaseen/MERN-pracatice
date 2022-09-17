const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    policy: {
        type: String,
    },
    hospital: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    age: {
        type: String,
    },
    status: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now(),
    },

});
module.exports = mongoose.model('Claim', ClaimSchema);