import useSWR from 'swr';
const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)
    
   

  return { user: data, error, isLoading: !data && !error}
}

export default useGithubUser