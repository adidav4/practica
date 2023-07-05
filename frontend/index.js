const express = require("express");
const cors =require("cors");
const bodyParser=require("body-parser");

const{Configuration, OpenAIApi}=require("openai");

const config =new Configuration({
    apiKey:"",
})

const openai=new OpenAIApi(config);

const app =express();
app.use(bodyParser.json());
app.use(cors());

app.post("/textai", async(req, res) =>{

    const {prompt}=req.body;

    const completition = await openai.createCompletion({
        model:"text-davinci-003",
        max_tokens:512,
        temperature:0,
        prompt:prompt,
    });

    res.send(completition.data.choices[0].text); 

})

const port=8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});
