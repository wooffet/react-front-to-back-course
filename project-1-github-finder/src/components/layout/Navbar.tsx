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
    </nav>
  );
};

export default Navbar;
