import styles from "./page.module.css";

async function getCachedData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache",
  });

  return res.json();
}

async function getNoStoreData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  return res.json();
}

export default async function FetchDemo() {
  const cached = await getCachedData();
  const noStore = await getNoStoreData();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.header}>Fetch Cache Demo</h1>

        <div className={styles.section}>
          <h2>Force Cache Data</h2>
          <p className={styles.text}><strong>Title:</strong> {cached.title}</p>
          <p className={styles.cacheType}>Cached (force-cache)</p>
        </div>


        <div className={styles.section}>
          <h2>No Store Data</h2>
          <p className={styles.text}><strong>Title:</strong> {noStore.title}</p>
          <p className={styles.noStoreType}>Always Fresh (no-store)</p>
        </div>
      </div>
    </div>
  );
}