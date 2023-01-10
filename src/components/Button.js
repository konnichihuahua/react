function Button({ color, title }) {
  return (
    <div>
      <button style={{ backgroundColor: color }} className='btn'>
        {' '}
        {title}{' '}
      </button>
    </div>
  );
}

export default Button;
