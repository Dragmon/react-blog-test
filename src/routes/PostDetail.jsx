import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export default function PostDetail() {
  const [post, setPost] = useState([]);
  const params = useParams();
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const urlPost = `${URL}/${params.postId}`;

  const showData = async () => {
    const response = await fetch(urlPost);
    const data = await response.json();
    setPost(data);
  };

  const formatDate = dayjs(post.publication_date).format('DD/MM/YYYY');

  useEffect(() => {
    showData();
  }, []);

  return (
    <article>
      <header className="my-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
      </header>
      <section>
        <p className="font-extrabold text-xl lg:text-2xl">{post.author}</p>
        <p className="font-extrabold">{formatDate}</p>
      </section>
      <section className="pt-5">
        <p>{post.content}</p>
      </section>
    </article>
  );
}
