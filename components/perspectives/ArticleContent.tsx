import Markdown from "react-markdown";

type ArticleContentProps = {
  content: string;
};

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content mt-8 text-base leading-relaxed text-primary">
      <Markdown>{content}</Markdown>
    </div>
  );
}
