import { Helmet } from 'react-helmet';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.Container}>
      <Helmet>
        <title>Contacts List App - Welcome!</title>
      </Helmet>
      <h1 className={css.Title}>Contacts List App - Welcome!</h1>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/phone-book-6772623-5573716.png"
        alt="Pbonebook"
      />
    </div>
  );
}
