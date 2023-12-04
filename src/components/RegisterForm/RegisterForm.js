import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.Label}>
        Username
        <input
          type="text"
          name="name"
          placeholder="Your username"
          autoComplete="off"
          required
        />
      </label>
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
          pattern=".{8,}"
          title="Your password must be at least 8 characters."
          autoComplete="off"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
