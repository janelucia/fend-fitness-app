import * as React from 'react';
import Card from '../Component/Card';
import H1 from '../Component/font/H1';
import H2 from '../Component/font/H2';
import H3 from '../Component/font/H3';
import ST from '../Component/font/SmallText';
import HeroImage from '../styles/images/HeroImage.png';
import Navi from '../Component/Navi';
import User from '../Queries/User';
import { Link } from 'react-router-dom';

function App() {
  const user = User();

  const ProgramCard = () => {
    if (!user.progresses || user.progresses.length === 0) {
      return (
        <Card className="h-52 p-5 flex flex-col justify-end">
          <H2>Starte jetzt mit deinem Workout!</H2>
        </Card>
      );
    } else {
      return (
        <Link to={`browse/program/${user.progresses[0].program.id}`}>
          <Card
            className="h-52 p-5 flex flex-col justify-end relative"
            url={user.progresses[0].program.image.url}
          >
            <div className="w-full bg-medium bg-opacity-75 absolute left-0 bottom-0 rounded-b-[30px] px-5 py-2">
              <H3>{user.progresses[0].week.title}</H3>
              <H2>{user.progresses[0].program.name}</H2>
              <ST>{`${user.progresses[0].workout.duration} Min. · ${user.progresses[0].workout.category}`}</ST>
            </div>
          </Card>
        </Link>
      );
    }
  };
  return (
    <>
      <header className="mt-10 mx-5 mb-6">
        <H1>Hi {user.name}</H1>
      </header>
      <main className="mt-10 mx-5 mb-6">
        <img className="mx-auto" src={HeroImage} alt="Women in Yoga Position" />
        <div className="mt-10 mb-3">
          <H2 className="inline">Dein Workout heute</H2>
          <ST className="inline relative left-12">Trainingsplan</ST>
        </div>
        <ProgramCard />
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
}

export default App;
