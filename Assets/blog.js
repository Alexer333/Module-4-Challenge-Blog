//Function for making a new post

const newContent = function () {

    const blogEntry = localStorage.getItem(`blogEntries`);
    const nameLater = JSON.parse(blogEntry) || [];
    const bee = document.querySelector(`.postbox`);
    JSON.parse(blogEntry);

    for (i = 0; i < nameLater.length; i++) {

        // Makes the content into different forms to then be grabbed later
        let div = document.createElement(`div`);
        let title = document.createElement(`h2`);
        let content = document.createElement(`p`);
        let username = document.createElement(`p`);
        
        // Makes the stuff into actual content in text form
        title.textContent = nameLater[i].title;
        content.textContent = nameLater[i].content;
        username.textContent = nameLater[i].username;

        // Grabs the attributes from earlier in the initial script
        title.setAttribute("class", "title");
        content.setAttribute("class", "content");
        username.setAttribute("class", "username");

        // Div collects the stuff with append, and bee adds the divs to the list
        div.append(username);
        div.append(title);
        div.append(content);
        bee.append(div);

    }

        console.log(nameLater);
        console.log(bee);

        // const newPost = function () {

        //     const stringContent = localStorage.getItem(`formContent`);
        //     const allPosts = JSON.parse(stringContent);

        //     title.textContent = formContent(i).title;

        // };
        // console.log(allPosts);
        // console.log(postContent);
        // }
        // newPost();

}

newContent();