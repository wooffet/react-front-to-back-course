export const SEARCH_USERS: string = 'SEARCH_USERS';
export const GET_USER: string = 'GET_USER';
export const CLEAR_USERS: string = 'CLEAR_USERS';
export const GET_REPOS: string = 'GET_REPOS';
export const SET_LOADING: string = 'SET_LOADING';
export const SET_ALERT: string = 'SET_ALERT';
export const REMOVE_ALERT: string = 'REMOVE_ALERT';

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
  hireable: boolean;
  company: string;
}

export interface Repo {
  id: number;
  html_url: string;
  name: string;
}

export interface Alert {
  message: string;
  type: string;
}

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

// Unsure why the below would just not work

// export interface GithubContextInterface {
//   users: User[];
//   user?: User;
//   repos?: Repo[];
//   loading: boolean;
// }

// export type GithubContextType = {
//   context: GithubContextInterface;
//   searchUsers: (login: string) => void;
//   getUser: (login: string) => void;
//   clearUsers: () => void;
//   getUserRepos: (login: string) => void;
// };

export type GithubContextType = {
  users: User[];
  user?: User;
  repos?: Repo[];
  loading: boolean;
  searchUsers: (login: string) => void;
  getUser: (login: string) => void;
  clearUsers: () => void;
  getUserRepos: (login: string) => void;
};

export interface GithubFinderReducerAction<T = any> {
  type: string;
  payload?: T;
}

export type AlertContextType = {
  alert?: Alert;
  setAlert: (message: string, type: string) => void;
};
