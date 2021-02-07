import User from './intefaces/User';
interface UserItemProps {
  user: User;
}

const UserItem = ({ user: { login, avatarUrl, htmlUrl } }: UserItemProps) => {
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
};

export default UserItem;
