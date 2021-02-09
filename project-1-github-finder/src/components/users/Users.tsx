import { CSSProperties } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { User } from '../../types/github-finder';

interface UsersProps {
  users: User[];
  loading: boolean;
}

const userStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

const Users = ({ users, loading }: UsersProps) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
