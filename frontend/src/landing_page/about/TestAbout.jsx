import { Button } from '../component/Button'; // Assuming these are now Bootstrap-styled components or simple HTML buttons
import { Card, CardContent } from '../component/Card'; // Assuming these are now Bootstrap-styled components or simple HTML cards
import { 
  GraduationCap, 
  MapPin, 
  Brain, 
  Code, 
  TrendingUp, 
  Award,
  Linkedin,
  Github,
  Mail,
  Calendar
} from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "IIT Patna Student",
      description: "Currently pursuing Bachelor's in Computer Science and Data Analytics",
      year: "2023-2027"
    },
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Specialized in machine learning algorithms for financial data analysis",
      year: "2024-Present"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies and data science frameworks",
      year: "2023-Present"
    },
    {
      icon: TrendingUp,
      title: "FinTech Innovation",
      description: "Developing cutting-edge solutions for stock market analysis",
      year: "2024-Present"
    }
  ];

  const skills = [
    "Machine Learning", "Python", "JavaScript", "Java", "HTML", "CSS", "React", "Tailwind", "Bootstrap", "Material UI", "shadcn UI", "Vite", "Node.js", "Express.js", "MySQL", "MongoDB", "Git", "Jest", "Redux Toolkit", "Framer Motion", "Toast", "toastify", "VS Code", "Canva", "Figma", "Gemini AI" , "Open AI","Data Analytics", "Financial Modeling", "Algorithm Design", "API Development", "Responsive Design", "UI/UX Design", "Agile Methodologies", "Version Control", "Problem Solving", "Team Collaboration", "Communication Skills"
  ];

  const projects = [
    {
      title: "Stoxight - Stock Market Analysis",
      description: "Developed a AI Analysis tool for stock price predictions and market trends",
      tech: ["Gemini AI", "React", "Bootstrap", "Node.js", "Express.js", "MongoDB","JWT","Jest","Toastify","Material UI","Chart.js"]
    },
    {
      title: "WonderLust - Full-Stack Project",
      description: "WanderLust is a comprehensive Full Stack Web Development project designed to facilitate the browsing and booking of vacation accommodations, including houses, villas, and farmhouses. This platform allows users to add their own properties to the listing, providing a diverse range of options for potential renters.",
tech: ["HTML","CSS","JS","Bootstrap","Express","Node.js","MongoDB","Passport.js","Cloudinary","Flash","Multer","Joi"]
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website designed with Modern UI/UX principles. It showcases my skills, projects, and experiences.",
      tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion"]
    }
  ];

  return (
    <div className="bg-light min-vh-100 mt-5"> {/* min-vh-100 for min-height: 100vh */}
      {/* Hero Section */}
      <section className="position-relative py-5 px-3 overflow-hidden" style={{ minHeight: 'calc(100vh - 100px)' }}> {/* Added minHeight for better hero section */}
        {/* Background Elements - Requires custom CSS for exact replication */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(to bottom right, rgba(0, 123, 255, 0.05), rgba(255, 255, 255, 1), rgba(0, 123, 255, 0.05))' // Example gradient, adjust colors
        }}></div>
        <div className="position-absolute rounded-circle bg-primary opacity-25" style={{ top: '20%', left: '10%', width: '18rem', height: '18rem', filter: 'blur(3rem)' }}></div>
        <div className="position-absolute rounded-circle bg-info opacity-25" style={{ bottom: '20%', right: '10%', width: '24rem', height: '24rem', filter: 'blur(3rem)' }}></div>
        
        <div className="container position-relative z-1">
          <div className="row align-items-center g-5">
            {/* Profile Info */}
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100 pe-lg-5">
                <div className="mb-4">
                  <h1 className="display-3 fw-bold text-dark mb-3">
                    Meet{' '}
                    <span className="text-primary">
                      Vidhan
                    </span>
                  </h1>
                  <p className="fs-4 text-muted fw-medium">
                    Founder & Lead Developer at Stoxight
                  </p>
                </div>
                
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4 text-muted">
                  <div className="d-flex align-items-center bg-light rounded-pill px-4 py-2 border border-primary">
                    <GraduationCap className="me-2 text-primary" style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span className="fw-medium">IIT Patna</span>
                  </div>
                  <div className="d-flex align-items-center bg-light rounded-pill px-4 py-2 border border-primary">
                    <MapPin className="me-2 text-primary" style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span className="fw-medium">India</span>
                  </div>
                </div>
              </div>

              <p className="fs-5 text-muted lh-base mb-5">
                I'm a passionate Computer Science and Data Analytics student at IIT Patna, 
                dedicated to revolutionizing stock market analysis through artificial intelligence. 
                My journey combines academic excellence with practical innovation, creating 
                solutions that democratize financial intelligence for everyone.
              </p>

              {/* Social Links */}
              <div className="d-flex flex-wrap align-items-center gap-3 pt-3">
                <a href="https://www.linkedin.com/in/vidhan-thakur27/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                  <Button variant="outline-primary" size="lg" className="d-flex align-items-center">
                    <Linkedin className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/VidhanThakur09" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                  <Button variant="outline-primary" size="lg" className="d-flex align-items-center">
                    <Github className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                  GitHub
                </Button>
              </a>
              <a href="mailto:vidhanthakur2700@gmail.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                <Button variant="outline-primary" size="lg" className="d-flex align-items-center">
                  <Mail className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                  Email
                </Button>
              </a>
            </div>
            </div>

            {/* Profile Visual */}
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="position-relative">
                {/* Decorative rings - Requires custom CSS/animation for exact replication */}
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle border border-primary opacity-25" style={{ width: '100%', height: '100%', animation: 'pulse 2s infinite' }}></div>
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle border border-primary opacity-10" style={{ width: '140%', height: '120%' }}></div>
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle border border-primary opacity-5" style={{ width: '180%', height: '140%' }}></div>
                
                <Card className="p-4 bg-white shadow-lg border border-primary opacity-75" style={{ backdropFilter: 'blur(5px)' }}> {/* Added opacity and blur for transparency */}
                  <CardContent className="text-center p-0">
                    <div className="position-relative mx-auto" style={{ width: '14rem', height: '14rem' }}>
                      {/* Gradient background for inner circle - Requires custom CSS */}
                      <div className="w-100 h-100 rounded-circle d-flex align-items-center justify-content-center shadow" style={{ background: 'linear-gradient(to bottom right, #0d6efd, #6610f2)' }}> {/* Bootstrap primary and info example */}
                        <div className="w-75 h-75 bg-light rounded-circle d-flex align-items-center justify-content-center shadow-inset"> {/* shadow-inset requires custom css */}
                          <Brain className="text-primary" style={{ width: '6rem', height: '6rem' }} />
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="position-absolute top-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '3rem', height: '3rem', transform: 'translate(25%, -25%)' }}>
                        <Award className="text-white" style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>
                      <div className="position-absolute bottom-0 start-0 bg-info rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '3rem', height: '3rem', transform: 'translate(-25%, 25%)' }}>
                        <Code className="text-white" style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="fs-2 fw-bold text-dark">Vidhan</h3>
                      <p className="text-primary fw-semibold fs-5">AI & FinTech Innovator</p>
                      <div className="d-flex justify-content-center align-items-center bg-light rounded-pill px-4 py-2 mx-auto w-fit border border-primary">
                        <Calendar className="me-2 text-primary" style={{ width: '1rem', height: '1rem' }} />
                        <span className="fw-medium">Available for collaborations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-5 px-3 bg-light border-top border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark">
              My Journey
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '40rem' }}>
              From computer science fundamentals to AI innovation in financial technology
            </p>
          </div>

          <div className="row g-4">
            {achievements.map((achievement, index) => (
              <div className="col-md-6" key={index}>
                <Card className="h-100 shadow-sm transition-all duration-300"> {/* Added h-100 for consistent height */}
                  <CardContent className="p-4">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0 me-4 bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                        <achievement.icon className="text-primary" style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="fs-4 fw-semibold text-dark">{achievement.title}</h3>
                          <span className="small text-primary fw-medium">{achievement.year}</span>
                        </div>
                        <p className="text-muted">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 px-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark">
              Technical Expertise
            </h2>
            <p className="fs-5 text-muted">
              Technologies and frameworks I work with
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill fw-medium"
                style={{ cursor: 'default' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5 px-3 bg-light border-top border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark">
              Featured Projects
            </h2>
            <p className="fs-5 text-muted">
              Some of my notable work in technology
            </p>
          </div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-4" key={index}>
                <Card className="h-100 shadow-sm transition-all duration-300">
                  <CardContent className="p-4 d-flex flex-column h-100">
                    <div className="mb-3 flex-grow-1">
                      <h3 className="fs-4 fw-semibold text-dark mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted">{project.description}</p>
                    </div>
                    
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-primary bg-opacity-10 text-primary-emphasis fs-7 fw-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 px-3">
        <div className="container text-center mx-auto" style={{ maxWidth: '60rem' }}>
          <div className="mb-5">
            <h2 className="display-4 fw-bold text-dark">
              Let's Connect
            </h2>
            <p className="fs-5 text-muted">
              Interested in collaboration or have questions about Stoxight? I'd love to hear from you.
            </p>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="mailto:vidhanthakur2700@gmail.com" className='text-decoration-none'>
              <Button variant="primary" size="lg" className="d-flex align-items-center justify-content-center">
                <Mail className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                Get in Touch
              </Button>
            </a>
            <a href="https://portfolio-design-lemon.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
              <Button variant="outline-primary" size="lg" className="d-flex align-items-center justify-content-center">
                <Github className="me-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                View Projects
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;