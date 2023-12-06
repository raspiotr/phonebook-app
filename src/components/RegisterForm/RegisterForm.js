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
        <div className={css.BoxInput}>
          <div className={css.Border}>
            <input
              className={css.Input}
              type="text"
              name="name"
              placeholder="Your username"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </label>
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
              pattern=".{8,}"
              title="Your password must be at least 8 characters."
              autoComplete="off"
              required
            />
          </div>
        </div>
      </label>
      <button className={css.Button} type="submit">
        Register
      </button>
    </form>
  );
};
