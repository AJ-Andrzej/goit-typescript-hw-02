import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.error}>Oops! There was an error! Try reloading...</p>
  );
};

export default ErrorMessage;
