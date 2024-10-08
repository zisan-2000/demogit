// components/ArticleDisplay/ArticleDisplay.jsx
const ArticleDisplay = ({ title, content }) => {
  return (
    <div className="mt-8 rounded-md border-2 border-gray-300 p-6 shadow-xl">
      <h2 className="flex justify-center rounded-full text-3xl font-bold shadow-lg ring-2">
        {title}
      </h2>
      <p className="mt-8">{content}</p>
    </div>
  );
};

export default ArticleDisplay;
