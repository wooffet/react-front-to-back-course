import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { GithubContext } from '../../context/github/githubContext';
import { GithubContextType } from '../../types/github-finder';

interface SearchProps {
  setAlert: (alertText: string, alertClass: string) => void;
}

const Search = ({ setAlert }: SearchProps) => {
  const { users, searchUsers, clearUsers } = useContext(
    GithubContext
  ) as GithubContextType;
  const [searchInput, setSearchInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(searchInput);
      setSearchInput('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='searchInput'
          id='searchInput'
          placeholder='Search Users...'
          value={searchInput}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
