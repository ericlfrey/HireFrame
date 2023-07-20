import { Button, Card, ListGroup } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user.displayName}! Welcome to HireFrame!</h1>
      <ListGroup key="sm" horizontal="sm" className="my-2">
        <ListGroup.Item>
          This ListGroup
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the c content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </ListGroup.Item>
        <ListGroup.Item>
          renders horizontally
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </ListGroup.Item>
        <ListGroup.Item>
          on Headline
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the c content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </ListGroup.Item>
        <ListGroup.Item>
          and above!
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the c content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Home;
