import React, { useState, useEffect } from 'react';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch('https://can-cors.herokuapp.com/https://www.reddit.com/r/' + subreddit + '.json').then(res => {
      if (res.status !== 200) {
        console.log("ERROR");
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setPosts(data.data.children);
        }
      })
    });
  }, [subreddit])

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" className="input" value={subreddit} onChange={(e => setSubreddit(e.target.value))} />
      </header>
      <div className="post_list">
        {
          (posts !== null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : 'Not Found'
        }
      </div>
    </div>
  );
}

export default App;