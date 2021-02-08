export interface User {
  id: number;
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hirable: boolean;
}

export default User;
