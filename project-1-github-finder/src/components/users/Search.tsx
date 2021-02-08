import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchProps {
  searchUsers: (searchInput: string) => void;
  clearUsers: () => void;
  showClear: boolean;
}

interface SearchState {
  searchInput: string;
}

export class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    searchInput: '',
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: e.target.value });
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.searchUsers(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    const { searchInput } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='searchInput'
            id='searchInput'
            placeholder='Search Users...'
            value={searchInput}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
