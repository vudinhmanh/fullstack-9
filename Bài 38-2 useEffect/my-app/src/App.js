import { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums"];
function App() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  console.log(type);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
