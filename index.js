const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const routes = require("./src/app/routes/index")

app.get('/', (req, res) => {
    res.send('Server is running')
})

// Application routes
app.use('/api/v1', routes);

async function dbConnect() {
    try {
        await mongoose.connect("mongodb+srv://user1:xko0uJZhUqww4fBz@cluster0.tbjwdxc.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
        app.listen(5000, () => {
            console.log(`Server running on ${5000}`);
        });
    } catch (error) {
        console.log('Failed to connect', error);
    }
}

dbConnect();

app.use((req, res, next) => {
    res.json({ message: "Api not found" })
})

app.use((err, req, res, next) => {
    res.json({ err })
})