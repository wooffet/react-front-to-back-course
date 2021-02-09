import { Fragment } from 'react';
import RepoItem from './RepoItem';

interface ReposProps {
  userRepos: Repo[];
}

const Repos = ({ userRepos }: ReposProps) => {
  return (
    <Fragment>
      {userRepos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
};

export default Repos;
