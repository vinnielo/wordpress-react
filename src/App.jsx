import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blog from "./components/Blog";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios.get("http://test-chris.local/wp-json/wp/v2/posts").then((res) => {
      // Saving the data to state
      setPosts(res.data);
    });
  };

  // Calling the function on page load
  useEffect(() => {
    fetchPosts();
  }, []);

  
  return (
    <div>
      {posts.map((item) => (
        <Blog post={item} />
      ))}
    </div>
  );
}

export default App;
