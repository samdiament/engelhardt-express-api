const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()) // -> req.body




// ROUTES
// Main routes
app.use('/main', require('./routes/main'));



app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`)
})