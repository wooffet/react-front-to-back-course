import { Link } from 'react-router-dom';

interface NavbarProps {
  title?: string;
  icon?: string;
}

const Navbar = ({
  title = 'GitHub Finder',
  icon = 'fab fa-github',
}: NavbarProps) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
