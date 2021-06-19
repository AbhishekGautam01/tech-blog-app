import { Card } from 'react-bootstrap';
const CardListItem = ({
  title,
  subtitle,
  date,
  author,
  authorImage,
  link,
  mode = 'normal',
}) => {
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
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
          {mode === 'placeholder' ? (
            <div>
              <Card.Title className="font-weight-bold mb-1">
                PlaceHolder Author
              </Card.Title>
              <Card.Text className="card-date">PlaceHolder Date</Card.Text>
            </div>
          ) : (
            <div>
              <Card.Title className="font-weight-bold mb-1">
                {author}
              </Card.Title>
              <Card.Text className="card-date">{date}</Card.Text>
            </div>
          )}
        </Card.Header>
        {mode === 'placeholder' ? (
          <Card.Body>
            <Card.Title className="card-main-title">
              Placeholder Title
            </Card.Title>
            <Card.Text>Placeholder Subtitle</Card.Text>
          </Card.Body>
        ) : (
          <Card.Body>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        )}
      </div>
      <a href="#" className="card-button">
        Read More
      </a>
    </Card>
  );
};
export default CardListItem;
