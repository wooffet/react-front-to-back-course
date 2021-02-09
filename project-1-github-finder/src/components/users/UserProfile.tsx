import { Fragment, useEffect, useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { GithubContextType } from '../../types/github-finder';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { GithubContext } from '../../context/github/githubContext';

interface UserProfileParams {
  login: string;
}

const UserProfile = ({ match }: RouteComponentProps<UserProfileParams>) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { loading, user, repos, getUser, getUserRepos } = useContext(
    GithubContext
  ) as GithubContextType;

  if (!user) {
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
  } = user;

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
      {repos && <Repos userRepos={repos} />}
    </Fragment>
  );
};

export default UserProfile;
