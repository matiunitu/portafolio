import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
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
      title: "Comment web page",
      description: "React",
      imgUrl: projImg1,
      url: "https://67ec8fb0df0efde8daa89a83--find-a-repository-testimonials-from-a.netlify.app/"
    },
    {
      title: "Task-List",
      description: "React",
      imgUrl: projImg2,
      url: "https://67ecb6e5c2535a1e852d6b81--task-lis.netlify.app/"
    },
    {
      title: "Calculator",
      description: "React Calculator",
      imgUrl: projImg3,
      url: "https://67ecd152db1aa7b3efa9d5dc--calculeitors.netlify.app/"
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
