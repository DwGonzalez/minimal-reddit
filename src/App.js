import { useState, useEffect } from 'react';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('pcmasterrace');

  useEffect(() => {
    fetch('https://www.reddit.com/r/pcmasterrace.json').then(res => {
      if (res.status != 200) {
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
        <input type="text" className="input" value="pcmasterrace" />
      </header>
      <div className="posts">
        {
          (posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''
        }
      </div>
    </div>
  );
}

export default App;