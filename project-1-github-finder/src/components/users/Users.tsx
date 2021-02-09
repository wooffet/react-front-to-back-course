import { CSSProperties, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { GithubContextType, User } from '../../types/github-finder';
import { GithubContext } from '../../context/github/githubContext';

const userStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

const Users = () => {
  const { loading, users } = useContext(GithubContext) as GithubContextType;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user: User) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
