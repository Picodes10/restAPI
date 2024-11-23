type PostProps = {
    title: string;
    content: string;
    author: string;
  };
  
  const PostCard: React.FC<PostProps> = ({ title, content, author }) => {
    return (
      <div className="border p-4 mb-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{content}</p>
        <p className="text-sm text-gray-600">By {author}</p>
      </div>
    );
  };
  
  export default PostCard;
  