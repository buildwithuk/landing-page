
const express = require('express')

const app = express()

const port = 5000

app.get("/", (req, res) => {

	res.send("Landing page api is up")
});

app.listen(port, () => {
	console.log(`Serving the app at ${port}`)
});


