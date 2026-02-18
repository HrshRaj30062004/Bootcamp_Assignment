import { GetStaticPaths,GetStaticProps,} from "next";
import styles from "../../styles/Static.module.css";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className="text-2xl font-bold mb-4">
          Static Generated Post
        </h1>

        <p className="mb-2">
          <strong>ID:</strong> {post.id}
        </p>

        <h2 className="text-xl font-semibold mb-2">
          {post.title}
        </h2>

        <p className="mb-4">
          {post.body}
        </p>
        <Link href="/"><button className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded transition">
          Back Home
        </button></Link>
        
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch( "https://jsonplaceholder.typicode.com/posts?_limit=5" );
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};


export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context
) => {
  const { id } = await context.params as { id: string };

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post: Post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 20, 
  };
};