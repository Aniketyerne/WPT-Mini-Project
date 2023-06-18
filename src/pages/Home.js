import "./Home.css";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src=".\Images\Add a little bit of body text (1).png"
            style={{ height: "500px" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./Images/RRB-Exam-Day-Guidelines-640x300.jpg"
            style={{ height: "500px" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\Images\C-DAC-C-CAT-Exam-2019.png"
            style={{ height: "500px" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div
            style={{
              background: "rgb(3, 7, 46)",
              height: "200px",
              marginTop: "20px",
            }}
            class="container"
          >
            <h1
              style={{
                color: "aliceblue",
                textAlign: "center",
                padding: "20px",
                fontWeight: "bolder",
              }}
            >
              CDAC Course Eligibility Criteria
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="/CourseEligibility"
                style={{ textDecoration: "none" }}
              >
                <button class="btn1 third">View Eligibility Criteria</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "rgb(3, 7, 46)" }} class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="embed-responsive embed-responsive-1by1">
              <iframe
                class="container-fluid"
                style={{
                  borderRadius: "50px",
                  marginTop: "30px",
                  justifyContent: "end",
                }}
                width="560"
                height="350"
                src="https://www.youtube.com/embed/gBs1e_6j2iU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            class="col-sm-12 col-md-6"
            style={{
              color: "rgb(241, 231, 231)",
              fontFamily: "cursive",
              marginTop: "60px",
              fontSize: "18px",
            }}
          >
            <p>
              Science/ Electronics/ Telecommunications/ Electrical/
              Instrumentation. Graduate in Engineering or equivalent(e.g.
              BE/BTech/4-year BSc Engg/AMIE/DoEACC B Level) in IT/Computer
              Science/ Electronics/ Telecommunications/ Electrical/
              Instrumentation.
            </p>
            <br />
            <p style={{ textAlign: "center" }}>OR</p>
            <br />
            <p>
              Post Graduate Degree in Engineering Sciences with corresponding
              basic degree(e.g. MSc/MS in Computer Science, IT, Electronics).
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }} class="container">
        <p>
          Before you think about how to prepare for CDAC C-CAT? Grab a pen and a
          notebook and start noting these essential points. So that you will not
          worry anymore. Strategically try to implement them in your prep
          stages.
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img
              src="./Images/FB.jpg"
              alt=""
              class="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div class="col-sm-12 col-md-6" style={{ marginTop: "20px" }}>
            <h5>1. Go through the exam syllabus.</h5>
            <h5>2. Understand the exam pattern.</h5>
            <h5>3. Create a preparation plan and cultivate a study routine.</h5>
            <h5>4. Time frame revision slots.</h5>
            <h5>5. Attempt mock tests regularly.</h5>
            <h5>6. Maintain an error log.</h5>
            <h5>7. Use the guidance of reference books.</h5>
            <h5>8. Pay attention to the level of difficulty of the topics.</h5>
            <h5>9. Maintain good mental health.</h5>
          </div>
        </div>
      </div>

      <div>
        <h3
          class="bg-dark-subtle"
          style={{marginTop: "40px", textAlign: "center", fontSize: "40px"}}
        >
          Important dates related to admission to C-DAC's PG Diploma courses of
          batch September 2023 batch through the C-CAT
        </h3>
      </div>

      <div class="table-responsive">
      
      <table class="table">
        
        <thead>
          <tr class="table-info">
            <th>#</th>
            <th style={{width: "75%"}}>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        
        <tbody>
          <tr class="table-danger">
            <th scope="row">1</th>
            <td>Beginning of Online Registration and Application for C-CAT</td>
            <td>6 June 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">2</th>
            <td>
              Closing of Online Registration and Application, and Payment of
              Examination Fee for C-CAT
            </td>
            <td>5 July 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">3</th>
            <td>Downloading of C-CAT Admit Cards</td>
            <td>11-15 july 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">4</th>
            <td>C-DAC's Common Admission Test (C-CAT) at the Test Centres</td>
            <td>15 july 2023 | 16 july 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">5</th>
            <td>Announcement of C-CAT Ranks</td>
            <td>28 july 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">6</th>
            <td>Online Selection of Courses and Centres(1st Counselling)</td>
            <td>28 july-04 August 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">7</th>
            <td>Declaration of 1st Round of Seat Allocation</td>
            <td>07 August 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">8</th>
            <td>
              Last Date of Payment of first Installment Course fee (Rs 10,000 +
              GST) for candidates allocated seats through the first round
            </td>
            <td>14 August 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">9</th>
            <td>Declaration of 2nd Round of Seat Allocation</td>
            <td>18 August 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">10</th>
            <td>
              Last Date Of Payment of first installment course fee(Rs10,000 +
              GST) for candidates allocated seats through the second round
            </td>
            <td>22 August 2023 (till 5pm)</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">11</th>
            <td>
              Payment of caution deposit (Rs 10,000 + GST) and Online Selection
              of Courses and Centres (2nd Counselling)
            </td>
            <td>24 - 30 August 2023 (till 5 pm)</td>
          </tr>
          <tr class="table-info">
            <th scope="row">12</th>
            <td>
              Declaration of Third Round of Seat Allocation (based on 2nd
              Counselling)
            </td>
            <td>31 August 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">13</th>
            <td>Last Date of Payment of Balance Course Fee</td>
            <td>5 September 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">14</th>
            <td>Last Date of Registration of Students</td>
            <td>6 September 2023</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">15</th>
            <td>Start of PG Diploma Courses across India</td>
            <td>8 September 2023</td>
          </tr>
          <tr class="table-info">
            <th scope="row">16</th>
            <td>End of PG Diploma Courses across India (Estimated)</td>
            <td>22 Feb 2024</td>
          </tr>
        </tbody>
        
      </table>
      
    </div>
    </>
  );
}

export default Home;
