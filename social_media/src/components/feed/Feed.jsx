
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"
import { useSelector } from "react-redux";



export default function Feed({ username }) {

  const {isFetching,user,error} = useSelector((prevState)=> prevState)|| {isFetching:false,user:null,error:null};
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" +username)
        : await axios.get("posts/timeline/" + user._id);

      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))
    }
    fetchPosts();
    console.log(posts);
  }, [username,user._id])



  return (
    <div className="feed">

      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id}
            post={p} />
        ))}
      </div>
    </div>
  );
}