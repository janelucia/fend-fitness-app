import classNames from 'classnames';

const H2 = (props) => {
  const { className, children } = props;
  return (
    <h2
      className={classNames(
        'font-poppins font-bold text-2xl text-light',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
