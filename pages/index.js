import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";

export default function Home({ home, posts }) {
  // 메인 포스트
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug === !home.mainPostUrl);

  console.log(mainPost);
  console.log(otherPost);

  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
    </div>
  );
}

export async function getStaticProps() {
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}
