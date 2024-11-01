function Button({ children, onClickHandler, style }) {
  return (
    <button className={style} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
