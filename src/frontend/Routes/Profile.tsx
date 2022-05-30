import React from 'react';
import Card from '../component/Card';
import Circle from '../component/Circle';
import Navi from '../component/Navi';
import H2 from '../component/font/H2';
import P from '../component/font/P';
import ST from '../component/font/SmallText';

const Profile = () => {
  return (
    <>
      <header className="m-5 h-24 flex items-center">
        <H2>Jane</H2>
      </header>
      <main className="m-5">
        <section className="flex flex-col justify-center items-center gap-y-3 p-8">
          <Circle className="w-32 h-32 bg-gradient-to-br from-gradient3A via-gradient3B to-gradient3C" />
          <P>Profil bearbeiten</P>
        </section>
        <section className="flex flex-col gap-y-2">
          <P>Aktueller Trainingsplan</P>
          <Card className="flex flex-row items-center gap-x-3 px-6 py-8">
            <Circle className="p-4 border-solid border-dark border-4 ">
              40%
            </Circle>
            <div className="">
              <P>Titel des Programms</P>
              <ST>1 von 8 geschafft</ST>
            </div>
          </Card>
        </section>
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
};

export default Profile;