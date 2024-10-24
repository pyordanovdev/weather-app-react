function Button({ children, onClickHandler }) {
  return (
    <button className='primary' onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
