import { Container } from 'react-bootstrap';
import Navbar from 'components/Navbar';

export default function PageLayout({ children, className }) {
  return (
    <Container>
      <Navbar />
      <div className="page-wrapper">{children}</div>
      <footer className={`page-footer ${className}`}>
        <div>
          <a href="#">courses</a>
          {' | '}
          <a href="#">github</a>
          {' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
}
