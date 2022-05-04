import { ReactComponent as Home } from '../styles/images/navi-svg/home.svg';
import { ReactComponent as Dumbbell } from '../styles/images/navi-svg/dumbbell.svg';
import { ReactComponent as Profil } from '../styles/images/navi-svg/profil.svg';

const Navi = () => {
    return (
        <footer className='w-full rounded-tl-3xl rounded-tr-3xl flex justify-around'>
            <Home />
            <Dumbbell />
            <Profil />
        </footer>
    );
}

export default Navi;