declare const SEARCH_USERS: string = 'SEARCH_USERS';
declare const GET_USER: string = 'GET_USER';
declare const CLEAR_USERS: string = 'CLEAR_USERS';
declare const GET_REPOS: string = 'GET_REPOS';
declare const SET_LOADING: string = 'SET_LOADING';
declare const SET_ALERT: string = 'SET_ALERT';
declare const REMOVE_ALERT: string = 'REMOVE_ALERT';

declare interface User {
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
  hireable: boolean;
  company: string;
}

interface Repo {
  id: number;
  html_url: string;
  name: string;
}

interface Alert {
  message: string;
  type: string;
}
