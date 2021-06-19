import { Alert } from 'react-bootstrap';
export default function PreviewAlert() {
  return (
    <Alert variant="secondary">
      This is preview Mode!{' '}
      <Alert.Link href="/api/exit-preview">Leave Preview mode</Alert.Link>
    </Alert>
  );
}
