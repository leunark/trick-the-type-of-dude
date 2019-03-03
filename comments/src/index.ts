import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log("Server running on port " + port);
    }
});