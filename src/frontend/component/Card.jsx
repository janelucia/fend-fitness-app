import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { className, children } = props;
  return (
    <Link to="/program">
      <div
        className={classNames(
          'bg-medium text-light rounded-[30px] w-full',
          className
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default Card;
