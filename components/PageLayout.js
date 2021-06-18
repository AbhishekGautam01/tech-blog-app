import { Container } from 'react-bootstrap';
import Navbar from 'components/Navbar';

export default function PageLayout({ children, className }) {
  return (
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
  );
}
