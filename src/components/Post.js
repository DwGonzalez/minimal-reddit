import React from 'react';

function Post(props) {
    return (
        <article>
            <a href={"https://reddit.com" + props.post.permalink} rel="noopener">
                <h3>{props.post.title}</h3>
                <h5>By {props.post.author}</h5>
                <h6>Upvotes: <u>{props.post.ups}</u></h6>
            </a>
        </article>
    )
}

export default Post;
