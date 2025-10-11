import express, {Request, Response, Express} from "express";

const PORT = 5000;
const app = express();

app.get("/", (req: Request, res: Response) => {
	
	res.send("App loaded");

});


app.listen(PORT, ()=> {

	console.log(`Landing API listening at ${PORT}`);
});
