const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{
    type: {
        type: String,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },
    duration: Number,
    weight:Number,
    reps:Number,
    sets:Number,
    distance: Number,
}],
    
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;