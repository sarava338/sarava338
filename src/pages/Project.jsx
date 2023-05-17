import { useEffect, useState } from "react";
import Card from "../components/Card";

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://api.github.com/users/sarava338/repos";
  const fetchApi = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(json);
        setIsLoading(false);
      });

  useEffect(() => {
    setIsLoading(true);
    fetchApi(url);
  }, []);


  return (
    <section className="project">
      <h2>Projects</h2>
      {isLoading ? <h2>Loading...</h2> : null}
      <article className="cards">
        {repos?.map((i) => (
          <Card repo={i} key={i.id} />
        ))}
      </article>
    </section>
  );
};

export default Project;
