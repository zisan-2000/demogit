// pages/MyArticle.jsx

import ArticleDisplay from "@/Components/MyArticleComp/ArticleDisplay";
import ArticleInput from "@/Components/MyArticleComp/ArticleInput";
import ToastNotifications from "@/Components/MyArticleComp/ToastNotifications";
import Layout from "@/LayOut/Layout";
import axios from "axios";
import { useState } from "react";

const MyArticle = () => {
  const [apiData, setApiData] = useState(null);

  const fetchArticle = (inputText) => {
    axios
      .get("http://127.0.0.1:8000/articles/")
      .then((response) => {
        const fetchedData = response.data[0];
        setApiData(fetchedData);
        toast.success(`Article generated: ${fetchedData.title}`, {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Error fetching the article:", error);
        toast.error("Failed to fetch the article.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <Layout
      title="My Article"
      showButton
      buttonLink="/post"
      buttonText="+ New Post"
    >
      <div className="mt-10 flex flex-col items-center">
        <ArticleInput onGenerate={fetchArticle} />
        {apiData && (
          <ArticleDisplay title={apiData.title} content={apiData.content} />
        )}
        <ToastNotifications />
      </div>
    </Layout>
  );
};

export default MyArticle;
