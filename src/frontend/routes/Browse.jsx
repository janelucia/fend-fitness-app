import Navi from '../component/Navi';
import H2 from '../component/font/H2';
import Card from '../component/Card';

const Browse = () => {
  return (
    <>
      <header className="m-5 h-24 flex items-center">
        <H2>Browse</H2>
      </header>
      <main className="m-5 flex flex-col gap-y-5">
        <Card className="flex items-center justify-center bg-gradient-to-br from-gradient1A to-gradient1B">
          <H2>Titel des Programms</H2>
        </Card>
        <Card className="flex items-center justify-center bg-gradient-to-br from-gradient2A to-gradient2B">
          <H2>100 Push-Ups Challenge</H2>
        </Card>
        <Card className="flex items-center justify-center bg-gradient-to-br from-gradient3A via-gradient3B to-gradient3C">
          <H2>Titel des Programms</H2>
        </Card>
        <Card className="flex items-center justify-center bg-gradient-to-br from-gradient1A to-gradient1B">
          <H2>Stretch and Relax</H2>
        </Card>
        <Card className="flex items-center justify-center bg-gradient-to-br from-gradient2A to-gradient2B">
          <H2>Titel des Programms</H2>
        </Card>
      </main>
      <footer>
        <Navi />
      </footer>
    </>
  );
};

export default Browse;
