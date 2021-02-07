import { Component, CSSProperties } from 'react';
import UserItem from './UserItem';
import User from './intefaces/User';

interface UsersProps {}
interface UsersState {
  users: User[];
}

const userStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

class Users extends Component<UsersProps, UsersState> {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        htmlUrl: 'https://github.com/mojombo',
      },
      {
        id: 2,
        login: 'defunkt',
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        htmlUrl: 'https://github.com/defunkt',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
        htmlUrl: 'https://github.com/pjhyett',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default Users;
