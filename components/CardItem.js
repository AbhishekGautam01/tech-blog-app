import { Card } from 'react-bootstrap';
import { CardSubtitle } from 'react-bootstrap/Card';
import Link from 'next/Link';
import { urlFor } from 'lib/api';
const CardItem = ({
  title,
  subtitle,
  date,
  coverImage,
  author,
  authorImage,
  link,
  mode = 'normal',
}) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={
              authorImage ||
              'https://img.icons8.com/dotty/80/000000/cat-profile.png'
            }
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            {mode === 'placeholder' ? (
              <>
                <Card.Title className="font-weight-bold mb-1">Title</Card.Title>
                <Card.Text className="card-date">Date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  {author}
                </Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ? (
            <div className="image-placeholder" />
          ) : (
            <Card.Img
              src={urlFor(coverImage)
                .height(300)
                .crop('center')
                .fit('clip')
                .url()}
              alt="Card image cap"
            />
          )}
        </div>
        {mode === 'placeholder' ? (
          <Card.Body>
            <Card.Title className="card-main-title">Title</Card.Title>
            <Card.Text>Subtitle</Card.Text>
          </Card.Body>
        ) : (
          <Card.Body>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        )}
      </div>
      {link && (
        <Link href={link.href} as={link.as}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
