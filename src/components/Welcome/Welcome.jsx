import { Link } from "react-router-dom";
import Container from "../Container/Container";


const Welcome = () => {
  return (
    <Container>
      <br />
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don&apost wait, start achieving your goals now!
      </p>
      <br />
      <ul>
        <Link to="/auth/register">
          <button type="submit">Registration</button>
        </Link>
        <Link to="/auth/login">
          <button type="submit">Log in</button>
        </Link>
      </ul>
    </Container>
  );
};

export default Welcome;
