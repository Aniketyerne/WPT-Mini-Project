import "./AboutUs.css";
import { CardGroup,Card, Button } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <div class="about-section">
        <h1>About Us</h1>
        <p>
          Personalised Learning- is the foundation of our unique programs for
          students. Using knowledge graphs, the program adapts and creates
          personalised learning journeys for students. It provides a
          comprehensive coverage of over 1 lakh concepts with animated videos
          and questions, fun quizzes and flashcards. Became India’s largest
          online learning platform.
        </p>
        <p>
          Learning is pivotal for a student's success in academics and life. The
          Digital Age is deeply shaping the way students learn and will also
          determine their future prospects.Here we encourage students to embrace
          this fast, changing world and making them ready for tomorrow by being
          their constant learning partner. We craft learning journeys for every
          student that address their unique needs. We believe in the power of
          one-to-one learning that addresses every child's learning needs,
          allows students to be holistically involved in their education and be
          active, lifelong learners.
        </p>
      </div>
      <h2 style={{ textAlign: "center", fontSize: "50px", fontFamily: "unset"}}>
        Our Team
      </h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px"}}>
        <CardGroup style={{ width: "75%" }}>
          <Card>
            <Card.Img
              variant="top"
              src="./Images/aniketimg.jpg"
              style={{ height: "390px" }}
            />
            <Card.Body>
              <Card.Title>Aniket Yerne</Card.Title>
              <p>CEO & Founder</p>
              <Card.Text>
                I am a driven and visionary founder, leading my company with
                passion and determination to disrupt the industry and create
                meaningful impact.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">aniket@ccat.com</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="./Images/kundanimg.jpg"
              style={{ height: "390px" }}
            />
            <Card.Body>
              <Card.Title>Kundan Waghulde</Card.Title>
              <p>Director</p>
              <Card.Text>
                As an art director, I combine my creative expertise and
                strategic mindset to craft captivating visual experiences that
                elevate the brand and engage audiences.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">kundan@ccat.com</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="./Images/vitthalimg.jpg"
              style={{ height: "390px" }}
            />
            <Card.Body>
              <Card.Title>Vitthal Dhakane</Card.Title>
              <p>Assosiate Director</p>
              <Card.Text>
                I am a skilled and innovative associate director, blending
                aesthetics and functionality to create compelling and
                user-centric solutions that resonate with the target audience.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">vitthal@ccat.com</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default AboutUs;
