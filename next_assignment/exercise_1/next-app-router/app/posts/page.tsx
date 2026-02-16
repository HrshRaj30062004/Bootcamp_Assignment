async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  return res.json();
}



async function Home() {
  const posts = await getPosts();

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