var db = require("../models/workout");


module.exports = function(app){
    app.get("/api/workouts", (req,res) => {
        db.find({})
        .then(workout => {
            console.log(workout)
           return res.json(workout)
        })
        .catch(err => {
            res.json(err);
        })
    });


app.post("/api/workouts",(req,res) => {
    db.find({})
    .then(workout =>{
       return res.json(workout);
    })
    .catch(err =>{
        res.json(err); 
    });
});


app.put("/api/workouts/:id", (req,res) => {
    const workoutId = req.params.id;
   


    db.findOneAndUpdate(
        {_id:req.params.id},
        {$push:{exercises :req.body}},
        {new: true},
        )
        .then(workout =>{
        return res.json(workout);
        })

        .catch(err =>{
        res.json(err); 
        }); 
});

app.get("/api/workouts/range", (req,res) => {
    db.find({})
    .then(workout => {
      return res.json(workout);
    })
    .catch(err =>{
        res.json(err);
    })
});

};
