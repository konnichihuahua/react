import Button from './Button';

const Header = ({ title }) => {
  return (
    <header>
      <h1> {title}</h1>
      <Button title='Add Task' color='black' />
    </header>
  );
};

export default Header;
