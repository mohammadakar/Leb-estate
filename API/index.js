const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log("connected to DB");
})
.catch((error) => {
    console.log(error);
});

const app = express();

app.use(cors({
    origin:['https://leb-estate-ko6b.onrender.com'] ,
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 4000, () => {
    console.log(`server is running on port ${process.env.PORT || 4000}`);
});

app.use("/api/users", require("./routes/UserRoute"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/listing", require("./routes/listingRoute"));
app.use(express.static(path.join(__dirname, "../clientSide/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "..",'clientSide', 'dist', 'index.html'));
});
