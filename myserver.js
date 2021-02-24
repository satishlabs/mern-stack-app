const express = require("express"); //use to build the rest API
const mongoose = require("mongoose"); //connect with database mongodb
const dotenv = require("dotenv"); //load the env file,file name must be .env
const bodyParser = require("body-parser"); //To parse the body,  
const cors = require("cors"); //Corrs origin Resource sharing
const path = require("path");

//Load the enviornment from .env.jlc file
dotenv.config({ path: ".env.jlc" });

/**
 * Connect to MongoDB.
 */
mongoose
    .connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
    })
    .then(
        () => {
            console.log("MongoDB connected successfully.");
        },
        (error) => {
            console.error(error);
            console.log(
                "MongoDB connection error. Please make sure MongoDB is running."
            );
            process.exit();
        }
    );

//Add middlewares  

const app = express();
const PORT = process.env.PORT || 5500;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"build")));
app.use(cors());

const mycourseController = require("./myserver/controllers/CourseController");
app.use("/myapi/", mycourseController);


//Set Response for requestURI -/hello

app.get("/hello", (req, res) => {
    console.log("Request for - /hello");
    return res.send("Hello Satish -- App is ready for use");
});

app.get("*",(req,res) =>{
    res.sendFile(
        path.join(__dirname,"build","index.html")
    );
});
//Start express server on port 5500

app.listen(PORT, () => {
    console.log("Express server is running at http://localhost:%d", PORT);
    console.log("Press CTRL-C to stop\n");
});