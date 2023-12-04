import { Helmet } from 'react-helmet';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.Container}>
      <Helmet>
        <title>Contacts List App - Welcome!</title>
      </Helmet>
      <h1 className={css.Title}>Contacts List App - Welcome!</h1>
    </div>
  );
}
