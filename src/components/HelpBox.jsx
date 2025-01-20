import './HelpBox.css';

function HelpBox({ title, text }) {
  const someEnvironmentVariable = process.env.SOME_ENVIRONMENT_VARIABLE;
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>This is some environment variable: {someEnvironmentVariable}</p>
    </article>
  );
}

export default HelpBox;
