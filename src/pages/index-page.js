import Post from "../component/Post";
import {useEffect, useState} from "react";

export default function IndexPage() {

    // initially set posts as an empty array
  const [posts,setPosts] = useState([]);

  // when we mount the component this will run
  useEffect(() => {
    // fetch is an async function, thats whys its having then
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        // pass all the information in the post element to Post component
        <Post {...post} />
      ))}
    </>
  );
}