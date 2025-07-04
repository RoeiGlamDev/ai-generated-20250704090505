// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sentry-example-page">
              <a>Sentry Example Page</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;