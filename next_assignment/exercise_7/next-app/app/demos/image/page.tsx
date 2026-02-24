import Image from "next/image";
import styles from "./page.module.css";

export default function ImageDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Image</h1>

        <div className={styles.imageWrapper}>
          <Image
            src="https://picsum.photos/500/300"
            alt="Random"
            width={500}
            height={300}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
}