import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from '../Component/Card';
import H1 from '../Component/font/H1';
import H2 from '../Component/font/H2';
import H3 from '../Component/font/H3';
import ST from '../Component/font/SmallText';
import HeroImage from '../styles/images/HeroImage.png';
import Navi from '../Component/Navi';
import User from '../Queries/User';

function App() {
  const user = User();
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
        <Card className="h-52 p-5 flex flex-col justify-end">
          <H3>Tag 2</H3>
          <H2>Titel des Programms</H2>
          <ST>26 Min. · Beweglichkeit</ST>
        </Card>
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
}

export default App;
