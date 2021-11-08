import React from 'react';

function Post(props) {
    return (
        <article>
            <a href={"https://reddit.com" + props.post.permalink} target="_blank">
                <h3>{props.post.title}</h3>
            </a>
        </article>
    )
}

export default Post;
