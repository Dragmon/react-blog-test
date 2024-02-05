import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { buttonVariants } from '@/components/ui/button';
import dayjs from 'dayjs';

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const URL = import.meta.env.VITE_REACT_APP_API_URL;

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPosts(data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let resultFilter = [];

  if (!search) {
    resultFilter = posts;
  } else {
    resultFilter = posts.filter(function (dato) {
      if (dato.title.toLowerCase().includes(search.toLocaleLowerCase())) {
        return dato;
      }
      if (dato.author.toLowerCase().includes(search.toLocaleLowerCase())) {
        return dato;
      }
      if (dato.content.toLowerCase().includes(search.toLocaleLowerCase())) {
        return dato;
      }
    });
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <section>
      <div className="flex justify-center items-center pb-10">
        <Input
          valeue={search}
          onChange={searcher}
          type="text"
          placeholder="search"
          className="max-w-[350px] border-black bg-white"
        />
      </div>
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {resultFilter.map((post) => (
          <Card key={post.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <h3>{post.author}</h3>
              <p>{dayjs(post.publication_date).format('DD/MM/YYYY')}</p>
            </CardHeader>
            <CardContent>
              <p>{post.content.slice(0, 71)}...</p>
              <Link to={`posts/${post.id}`} className={buttonVariants()}>
                Ver mas
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Home;
