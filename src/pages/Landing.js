import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Container from "../components/Container/Container";



// landing page component for the home page
function Landing() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <img
            //using img-fluid allows the image to be mobile responsive
            className="img-fluid"
              alt="employees"
              src="https://hrtechweekly.files.wordpress.com/2017/12/img-1.jpeg?w=822"
              style={{ padding: "10px 10px" }}
              
            ></img>
          </Col>
        </Row>
      </Container>

      <div
      // jumbotron for footer
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: `url("https://image.freepik.com/free-vector/wavy-background-theme-concept_23-2148453926.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4" style={{ color: "white" }}>
            Welcome to the Employee Directory!
          </h1>
          <br></br>
          <p className="lead" style={{ color: "white" }}>
            Visit the Search Page to get started.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
