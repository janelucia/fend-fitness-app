import Card from '../component/Card';
import H1 from '../component/font/H1';
import H2 from '../component/font/H2';
import H3 from '../component/font/H3';
import ST from '../component/font/SmallText';
import HeroImage from '../styles/images/HeroImage.png';

const Home = () => {
    return (
        <div className='mt-10 mx-5 mb-6'>
            <div className='mb-6'>
                <H1>Hi Name!</H1>
            </div>
            <img className='mx-auto' src={HeroImage} alt='Women in Yoga Position' />
            <div className='mt-10 mb-3'>
                <H2>Dein Workout heute</H2>
                <ST>Trainingsplan</ST>
            </div>
            <Card>
                <div className='pl-7 pt-24'>
                    <H3>Tag 2</H3>
                    <H2>Titel des Programms</H2>
                    <ST>26 Min. · Beweglichkeit</ST>
                </div>
            </Card>
        </div>
    )
};

export default Home;