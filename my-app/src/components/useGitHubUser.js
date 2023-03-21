import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  return [fetchUser, data, error, loading];
}

export default useGithubUser;
