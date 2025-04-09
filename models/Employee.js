const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: String,
    schedule: String,
    absences: Number,
    lateArrivals: Number,
    daysOff: [String],
    birthday: Date
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);

