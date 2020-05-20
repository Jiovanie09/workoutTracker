const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema =  new Schema(
    {
        day: {
            type: Date, 
            default: Date.now
        }, 
        excercises: [
            {
                type:{
                    type: String, 
                    trim: true,
                    required: "Enter excercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the excercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter duration of exercise in minutes"
                }, 
                weight: {
                    type: Number
                },
                repetitions: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;