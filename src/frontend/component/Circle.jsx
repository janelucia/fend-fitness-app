import classNames from 'classnames';

const Circle = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames('rounded-full', className)}>{children}</div>
  );
};

export default Circle;
