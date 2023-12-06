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
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
      </label>
      <label className={css.Label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Your password"
          autoComplete="off"
          required
        />
      </label>
      <button className={css.Button} type="submit">
        Log In
      </button>
    </form>
  );
};
