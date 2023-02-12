import styles from "../styles/Home.module.css";
import Link from "next/link";

const ArticleLink = ({ article }: any) => {
    
    return (
        <Link
            href={`/article/${article.slug}`}
            className={styles.card}
          >
            <h2>{article.title} &rarr;</h2>
            <p>{article.description}</p>
          </Link>
    );
    };

export default ArticleLink;