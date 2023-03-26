import React from 'react';
import useGithubUser from './useGithubUser';



function GithubUser({ username }) {
  const [fetchUser, data, error, loading] = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data?.name && <h1>{data.name}</h1>}
    </div>
  );
}

export default GithubUser;
