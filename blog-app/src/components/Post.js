import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Post() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/Student')
      .then(res => {
        console.log(res);
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

 
  return (
    <div style={{display:"flex",flexWrap:"wrap", gap:"8px",justifyContent:"center"}}>
      
        {
      posts.map(post => {
        return(
        <div key={post.id} className='main' style={{ width: "400px", height: "300px", backgroundColor: "yellow", borderRadius:"8px" }}>
    < img src={post.Profile} alt="Profile" style ={{ width: "400px", height: "100%", padding:"9px 8px" }}/>
   <hr/>
   <h2>{post.id}</h2>
<h2>{post.name}</h2>
 <h2>{post.pass}</h2>
<h2>{post.course}</h2>
      
       </div> )
}
  )
}
</div>
  )
}


export default Post






