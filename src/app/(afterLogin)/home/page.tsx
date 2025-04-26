import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TapProvider from "./_components/TapProvider";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <TapProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TapProvider>
    </main>
  );
};

export default HomePage;
