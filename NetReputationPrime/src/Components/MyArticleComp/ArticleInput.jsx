// components/ArticleInput/ArticleInput.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import ArticleData from "../../data/ArticleData";

const ArticleInput = ({ onGenerate }) => {
  const [article, setArticle] = useState("");

  const handleInputChange = (e) => {
    setArticle(e.target.value);
  };

  const handleGenerateClick = () => {
    if (article === "") {
      toast.warning("Please enter some text before generating the article!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    onGenerate(article);
  };

  const Icon = ArticleData.icon;

  return (
    <div className="flex items-center rounded-md border-2 border-blue-500 p-2 shadow-lg">
      <Icon className="mr-2 text-gray-400" size={40} />
      <input
        type="text"
        className="w-36 text-lg text-gray-600 outline-none md:w-64 lg:w-96"
        placeholder={ArticleData.placeholderText}
        value={article}
        onChange={handleInputChange}
      />
      <button
        onClick={handleGenerateClick}
        className="mt-0 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        {ArticleData.buttonText}
      </button>
    </div>
  );
};

export default ArticleInput;
