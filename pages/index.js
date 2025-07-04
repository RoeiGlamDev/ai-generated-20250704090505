// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to CodeForge Next.js Dashboard</h1>
      <Image
        src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Close-up of handwritten 'Be creative' with a light bulb sketch on paper."
        width={3916}
        height={2724}
      />
      <Link href="/sentry-example-page">
        <a>Sentry Example Page</a>
      </Link>
    </div>
  );
};

export default HomePage;