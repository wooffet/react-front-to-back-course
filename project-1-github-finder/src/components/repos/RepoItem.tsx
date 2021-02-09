import { Repo } from "../../types/github-finder";

interface RepoProps {
  repo: Repo;
}

const RepoItem = ({ repo }: RepoProps) => {
    return <div className='card'>
        <h3><a href={repo.html_url}>{repo.name}</a></h3>
  </div>;
};

export default RepoItem;
