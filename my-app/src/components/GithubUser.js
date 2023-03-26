import React from 'react';
import useGithubUser from './useGithubUser';

function GithubUser({ username }) {
  const { user, error, isLoading, refetch } = useGithubUser(username);

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {user?.name && (
        <div>
          <h1>{user.name}</h1>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
