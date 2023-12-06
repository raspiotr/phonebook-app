import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.Label}>
        Email
        <div className={css.BoxInput}>
          <div className={css.Border}>
            <input
              className={css.Input}
              type="email"
              name="email"
              placeholder="Your email address"
              autoComplete="email"
              required
            />
          </div>
        </div>
      </label>
      <label className={css.Label}>
        Password
        <div className={css.BoxInput}>
          <div className={css.Border}>
            <input
              className={css.Input}
              type="password"
              name="password"
              placeholder="Your password"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </label>
      <button className={css.Button} type="submit">
        Log In
      </button>
    </form>
  );
};
