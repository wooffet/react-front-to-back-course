import { Component } from 'react';

interface UserItemProps {}
interface UserItemState {
  id: string;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
}

class UserItem extends Component<UserItemProps, UserItemState> {
  state = {
    id: 'id',
    login: 'mojombo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    htmlUrl: 'https://github.com/mojombo',
  };

  render() {
    const { login, avatarUrl, htmlUrl } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatarUrl}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={htmlUrl} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
