import { Container } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import Head from 'next/head';
export default function PageLayout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Navbar />
        <div className="page-wrapper">{children}</div>
        <footer className={`page-footer ${className}`}>
          <div>
            <a
              href="https://github.com/AbhishekGautam01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            {' | '}
            <a
              href="https://www.linkedin.com/in/abhishek-gautam-se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
}
