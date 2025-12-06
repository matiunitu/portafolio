import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "./assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => window.open(url, "_blank")}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const Projects = () => {
  const proyectos = [
    {
      title: "Iefun WebSite",
      description: "React",
      imgUrl: projImg4,
      url: "https://iefun-weside-r-git-main-matiunitus-projects.vercel.app"
    },
      {
      title: "EmojisCliker",
      description: "Firebase / React",
      imgUrl: projImg5,
      url: "https://emojiscliker.vercel.app/"
    },
    {
      title: "Comment web page",
      description: "React",
      imgUrl: projImg1,
      url: "https://find-a-repository-testimonials-from-a.netlify.app/"
    },
    {
      title: "Task-List",
      description: "React",
      imgUrl: projImg2,
      url: "https://task-lis.netlify.app/"
    },
    {
      title: "FakeapiStore",
      description: "React / api",
      imgUrl: projImg3,
      url: "https://website-with-api-fakestore.netlify.app/"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Algunos de mis proyectos más recientes en diseño y desarrollo web.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Todos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {proyectos.map((proyecto, index) => (
                          <ProjectCard key={index} {...proyecto} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative Background" />
    </section>
  );
};
