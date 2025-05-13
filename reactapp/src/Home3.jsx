import { useSearchParams } from 'react-router-dom';

const Home3 = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const filter = searchParams.get("filter");

  return (
    <div>
      <h2>Home Page</h2>
      {id && <p>Query ID: {id}</p>}
      {filter && <p>Filter: {filter}</p>}
    </div>
  );
};

export default Home3;
