import { useState, useEffect } from "react";

const ReposList = () => {
  const [repoListOriginal, setRepoListOriginal] = useState();
  const [searchItem, setSearchItem] = useState("test");
  useEffect(() => {
    console.log("dadawdwad");
    fetch(`https://api.github.com/search/repositories?q=​${searchItem}`)
      .then((response) => response.json())
      .then((data) => setRepoListOriginal(data));
  }, [setRepoListOriginal, searchItem]);
  const setSearch = (e) => {
    setSearchItem(e.target.value);
  };
  return (
    <div>
      <h3>
        Search Repository{" "}
        <input
          name="fname"
          type="text"
          value={searchItem}
          onChange={setSearch}
        />
      </h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Resository Name</th>
            <th scope="col">Stars</th>
            <th scope="col">Forks</th>
          </tr>
        </thead>
        <tbody>
          {repoListOriginal &&
            repoListOriginal.items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.full_name}</td>
                  <td>{item.forks_count}</td>
                  <td>{item.stargazers_count}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReposList;
