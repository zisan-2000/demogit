import NewsFeed from "@/Components/MyFeeds/NewsFeed";
import Layout from "@/LayOut/Layout";

const MyFeeds = () => {
  return (
    <Layout
      title="My Feeds"
      showButton
      buttonLink="/post"
      buttonText="+ New Post"
    >
      <NewsFeed />
    </Layout>
  );
};

export default MyFeeds;
