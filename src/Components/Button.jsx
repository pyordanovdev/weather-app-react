/**
 * A React component that renders a button element with a given className
 * and onClick handler, and displays the given children.
 *
 * @param {{children: ReactNode, onClickHandler: function, style: string}} props
 * @returns {JSX.Element} A JSX element representing a button with the given
 *                        className and onClick handler.
 */
function Button({ children, onClickHandler, style }) {
  return (
    <button className={style} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
