const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");



app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const workshopSchema =  mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true} ,
        open: { type: String, required: true },
        closed: { type: String, required: true },
        typicalagerange: { type: string, required: true}
    }
);

const workshop = mongoose.model("workshop", workshopSchema, "workshop");

app.get("/", async (req, res) => {
    const workshops = await workshop.find({});
    res.render("workshop.ejs", { workshops });
});


app.delete("/workshop/:id", async (req, res)=>{
    const response= await workshop.findOneAndDelete({_id: req.params.id})
    res.json(response)
})



app.patch("/workshop/:id", async (req, res)=>{
    const response= await workshop.findOneAndUpdate({_id: req.params.id},
    req.body, {new: true})
    res.json(response)
})
app.POST ("/workshop", async (req, res)=>{
    const workshop= "sessions",
    email= "angelica.melo@compscihigh.org "
}).save()
res.json(workshop);
({
const workshops = await new user })
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.2yqbx.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0");


app.listen(3000, () => {
        console.log(`Server running.`);
    });


startServer();
