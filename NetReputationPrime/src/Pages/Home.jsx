// src/Home.js

import NewsFeed from "@/Components/MyFeeds/NewsFeed";
import Layout from "@/LayOut/Layout";

const Home = () => {
  return (
    <Layout
      title="My Post"
      showButton
      buttonLink="/post"
      buttonText="+ New Post"
    >
      <NewsFeed />
    </Layout>
  );
};

export default Home;
