import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import User from './intefaces/User';

interface UserProfileParams {
  login: string;
}

interface UserProfileProps {
  getUser: (username: string) => void;
  user?: User;
  loading: boolean;
}

class UserProfile extends Component<
  UserProfileProps & RouteComponentProps<UserProfileParams>
> {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
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
      hirable,
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default UserProfile;
