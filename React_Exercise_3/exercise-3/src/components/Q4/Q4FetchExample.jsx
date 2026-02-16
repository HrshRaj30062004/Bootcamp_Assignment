import useFetch from "./useFetch";

export default function FetchExample() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>useFetch Example</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}