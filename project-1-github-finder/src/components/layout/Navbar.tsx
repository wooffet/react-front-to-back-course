import { Component } from 'react';

interface NavbarProps {
  title: string;
  icon: string;
}

class Navbar extends Component<NavbarProps> {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github',
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
