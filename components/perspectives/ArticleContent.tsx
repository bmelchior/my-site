import Markdown from "react-markdown";

type ArticleContentProps = {
  content: string;
};

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content mt-8">
      <Markdown>{content}</Markdown>
    </div>
  );
}
