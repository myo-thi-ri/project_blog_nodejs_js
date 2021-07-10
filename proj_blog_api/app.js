const express = require(express);
const Post = require("./api/models/posts")
const postsData = new Post();
const app = express();

app.get("/", (req,res)=>{
    const test={
        testing:"testing"
    }
//how to read json in nodejs
    postsData.add(test);
    res.status(200).send(postsData.get());
    //res.status(200).send("Hello World")

    app.get("/api/posts/:post_id", (req,res)=>{
        const postId = req.params.post_id;
        const foundPost = postsData.getIndividualBlog(postId)
        if(foundPost){
            res.status(200).send(foundPost);
        }else{
            res.status(404).send("Not found");
    }
    })

})

app.listen(3000, ()=>console.log("Listening on http.//localhost:3000"))
