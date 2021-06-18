import { Row, Media, Image, Col } from 'react-bootstrap';
export default function AuthorInfo() {
  return (
    <Row>
      <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars.githubusercontent.com/u/29154826?s=400&u=c230daa27c570754ca252966962a678c5dbbe4a8&v=4"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Abhsihek Gautam and I am an experienced software
              engineer and this is my blog page.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  );
}
