import { useState, useEffect } from "react";
import axios from "axios";
//import "./Post.css"
export function PostTest() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`) 
      .then((response) => {
        console.log(response.data);
        setPost([...response.data]); 
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPost = post.filter((posts) =>
    posts.name.toLowerCase().includes(search.toLowerCase())
  );

   return (
    <div className="Post-app">
      <div className="Post-search">
        <h1 className="Post-text">Search </h1>
        <form>
          <input
            className="Post-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
          <button className="Search_Btn" >Search Post</button>
       </form>
       </div>
        {filteredPost.map((post) => {
          return (
           <div key={post.id}>
           <h1>name={post.name}</h1> 
           <p> email={post.email} </p>
           <p>body={post.body}</p> 
          </div>
       );
      })}
   </div>
   )
}
