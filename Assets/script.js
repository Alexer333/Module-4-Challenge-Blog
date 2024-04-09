//Input and Label for user, title, and content...

function formThingy(event){
    const stringPost = localStorage.getItem("blogEntries");
    const blogEntries = JSON.parse(stringPost) || [];

    submit.addEventListener(`click`, formThingy);
    const post = JSON.parse(localStorage.getItem(`blogEntries`));

const formContent = {
username: username.value,
title: title.value,
content: content.value.trim()

    }

if(formContent.username==`` || formContent.title=='' || formContent.content==''){
    alert("All fields must be filled!");
    event.preventDefault();
    console.log(`Error - Field Empty`);
} else {
    console.log(`Succesfully Pushed!`);
    post.push(formContent);
    localStorage.setItem(`blogEntries`, JSON.stringify(blogEntries));
}

}

username = document.getElementById("username");
title = document.getElementById("title");
content = document.getElementById("content");

submit = document.getElementById("submit");

console.log(username);
console.log(title);
console.log(content);