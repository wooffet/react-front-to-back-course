import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchProps {
  searchUsers: (searchInput: string) => void;
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
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='searchInput'
            id='searchInput'
            placeholder='Search Users...'
            value={this.state.searchInput}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
