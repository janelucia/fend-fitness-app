import classNames from 'classnames';

const ST = (props) => {
  const { className, children } = props;
  return (
    <p
      className={classNames(
        'font-poppins font-normal text-xs text-light',
        className
      )}
    >
      {children}
    </p>
  );
};

export default ST;
