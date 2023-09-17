import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"
import {dirname} from "path"
import  {fileURLToPath} from "url";
import _ from "lodash"
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",  (req, res)=>{
    res.render("/index.html" );
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); 
})