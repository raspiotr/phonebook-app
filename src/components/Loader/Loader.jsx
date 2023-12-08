import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Oval
        height={100}
        width={100}
        color="#1d21ff"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1d21ff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
