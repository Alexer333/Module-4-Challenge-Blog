//Input and Label for user, title, and content...
fetch(username)
fetch(title)
fetch(content)



//Function for making a new post
const newPost= function(){
    //Saves post in storage
        const stringContent = localStorage.getItem(`userPost`);
        const allPosts = JSON.parse(stringContent);
    
    //For when a new post is made...
        for(i = 0; i < newContent.length(); i++){
            let div = document.createElement(`div`);
            let title = document.createElement(`h1`);
            let constant = document.creatElement(`p`);
            let author = document.createElement(`h2`);
    
            title.textContent = newContent(i).userTitle;
    
        };
        console.log(allPosts);
        console.log(postContent);
    }
    newPost();