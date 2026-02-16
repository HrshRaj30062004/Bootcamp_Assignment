import { GetServerSideProps } from "next";

type Post={
  id:number,
  title:string,
  body:string,
};

type Props={
  posts: Post[];
}
export const getServerSideProps: GetServerSideProps=async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return{
    props:{
      posts: data.slice(0,10),
    }
  }
}
  

function Home({posts}: Props) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts (App Router)</h2>

      {posts.map((post) => (
        <div key={post.id}>
            <h2>Post Id: {post.id}</h2>
            <h3>Post Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;