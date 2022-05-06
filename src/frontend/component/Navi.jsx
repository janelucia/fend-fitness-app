import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../styles/images/navi-svg/home.svg';
import { ReactComponent as Dumbbell } from '../styles/images/navi-svg/dumbbell.svg';
import { ReactComponent as Profile } from '../styles/images/navi-svg/profil.svg';

const Navi = () => {
    return (
            <nav className='w-full rounded-tl-3xl rounded-tr-3xl flex justify-around gap-x-12 fixed bottom-0 bg-gradient-to-r from-dark px-5 py-2 text-medium'>
                <Link to='/' className='active:text-light'>
                    <Home />
                </Link>
                <Link to='/browse'>
                    <Dumbbell />
                </Link>
                <Link to='/profile'>
                    <Profile />
                </Link>
            </nav>
    );
}

export default Navi;