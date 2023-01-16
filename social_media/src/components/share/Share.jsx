import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import axios from "axios";

export default function Share() {
  const {isFetching,user,error} = useSelector((prevState)=> prevState)|| {isFetching:false,user:null,error:null}
const desc = useRef();
const[file,setFile] = useState(null)

const submitHandler=  async (e)=>{
 e.preventDefault()
 const newPost = {
  userId:user._id,
  desc:desc.current.value
 }
  if(file){
    const data = new FormData()
    const fileName = Date.now() + file.name
    data.append("file",file); 
    data.append("name",fileName);
    newPost.img = fileName
    console.log(data);
    try{
      var res = await axios.post("/upload", data)
      console.log(res)
   
    }catch(err){
       console.log(err)
    }
  }
   
 try{
  await axios.post("/posts",newPost)    // want to fetch with backend...
  window.location.reload()              //the initial path in package.json
}catch(err){                                 

 }

}

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input type="file" id="file" style={{display:"none"}} accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                </label>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}