import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="h-20 bg-cyan-500 flex justify-between items-center px-16">
      <div>
        <Link to={'/'}>
          <img
            className="w-5"
            src="https://png2.cleanpng.com/sh/06f850c8e844b5f4604c38fccb97781d/L0KzQYm4UsAzN6lsiZH0aYP2gLBuTgZma6V0ip9wcnHzeLrqk71ncaNqRdV1aYCwccP7TfZtaZ5qRdh7ZXWwc7F1lPVvfF5tfd51LXPvecHokwQuap1mktt3Zz3pecPsTcMzPGQ4TZ9vcnXoPbnsjPwua51uRadsMEPlQ4XpUcc4bWo3Rqg7MUKzQ4W5UcU1O2g5TqUCOUC8RoO1kP5o/kisspng-vector-graphics-fire-clip-art-flame-free-content-hell-clipart-blazing-fire-324335-free-hell-cli-5c03b34b177e92.6212034215437463790962.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link className="px-5" to={'/'}>
          Blog
        </Link>
        <Link className="px-5" to={'/new-post'}>
          Nuevo Post
        </Link>
      </div>
    </header>
  );
};
