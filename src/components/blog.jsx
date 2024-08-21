import React from "react";

function Blog(props){
    return(
        <div className="blog">
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Blog;