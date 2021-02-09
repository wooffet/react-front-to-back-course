import { Component, Fragment } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import User from './intefaces/User';
import Spinner from '../layout/Spinner';
import Repo from '../repos/interfaces/Repo';
import Repos from '../repos/Repos';

interface UserProfileParams {
  login: string;
}

interface UserProfileProps {
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  user?: User;
  userRepos?: Repo[];
  loading: boolean;
}

class UserProfile extends Component<
  UserProfileProps & RouteComponentProps<UserProfileParams>
> {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    if (!this.props.user) {
      return null;
    }

    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = this.props.user;

    const { userRepos, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt='avatar'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Profile
            </a>
            <ul>
              <li>
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>{' '}
                    <a href={blog} style={{ color: 'black' }}>
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        {userRepos && <Repos userRepos={userRepos} />}
      </Fragment>
    );
  }
}

export default UserProfile;
