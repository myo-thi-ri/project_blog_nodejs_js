const PATH = './data.json'
const fs = require('fs');
class Post{
    get(){
        return this.readData();
    }
    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }
    add(newPost){
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }
    storeData(rawdata){
        //write data into json file
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
    getIndividualBlog(postId){
        const posts = this.readData();
        const foundPost = post.find((post) => post.id == postId);
        return foundPost;
    }
}

module.exports = Post
