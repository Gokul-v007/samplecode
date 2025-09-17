import react, {useState} from "react";
import{Container , Row, Col, ProgressBar, Card, Button,Form} from "react-bootstrap";
import '../Projectcss/Page.css'
import { FaAward ,FaRegFileAlt } from "react-icons/fa";
import Project1 from './Project1.jsx'
import { BsSuitcaseLg } from "react-icons/bs";
import { ArrowLeftOutlined, CalendarOutlined } from "@ant-design/icons";



function Registrationform (){


const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected status:", selectedStatus);
  };



  const [step , setStep] = useState(0);
  console.log("current Step", step);

  const totalSteps = 7;

  const steps = [
    { title: "Personal Info", subtitle: "Basic details & photo" },
    { title: "Professional Status", subtitle: "Experience level" },
    { title: "Education Details", subtitle: "Academic background" },
    { title: "Work Experience", subtitle: "Career history" },
    { title: "Skills & Portfolio", subtitle: "Competencies" },
    { title: "Preferences", subtitle: "Job preferences" },
    { title: "Complete Profile", subtitle: "Review & submit" },
  ];

  const emptyQualification = {
    level: "",
    institution: "",
    degree: "",
    score: "",
    year: ""
  };

  const [qualifications, setQualifications] = useState([emptyQualification]);

  const handleChange = (index, evt ,e) => {
    const { name, value } = evt.target;
    const updated = qualifications.map((q, i) =>
      i === index ? { ...q, [name]: value } : q
    );
    setQualifications(updated);
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setQualifications([...qualifications, emptyQualification]);
  };

  const handleRemove = index => {
    setQualifications(qualifications.filter((_, i) => i !== index));
  };





const interestOptions = [
  "Software Development",
  "Data Science & Analytics",
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Product Management",
  "Project Management",
  "Digital Marketing",
  "Sales",
  "Business Analysis",
  "Quality Assurance",
  "Network Administration",
  "Database Management",
  "Technical Writing",
  "Research & Development",
];


  const [selectedInterests, setSelectedInterests] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  // const currentStep = 5; // step 5 out of 7

  const toggleInterest = (i) => {
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0].name);
    }
  };



  
  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    duration: "",
    description: "",
  });

  // const handleChange = (e) => {
  //   setExperience({ ...experience, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Work Experience Submitted:", experience);
    
  // };


  // const prevStep = ()=>{
  //   if(step > 1) setStep(step-1)
  // };
  // const nextStep = ()=>{
  //   if(step < 1) setStep(step + 1)
  // }

  const nextStep = () => {
  if (step < totalSteps) 
  setStep(step + 1);
};

const prevStep = () => {
  if (step > 1) 
  setStep(step - 1);
};


  return(
    <>
    <div className = 'Form'>
      <Container>
        <Row>
          <Col>
          <div className='d-flex justify-content-between align-items-center'>
              <span>
                step{step} of {totalSteps}
              </span>
              <span>Building your professional profile</span>
          </div>
          <ProgressBar 
          animated now={(step / totalSteps)* 100}
          className='mt-2'
          style={{height:"6px"}}/>
          </Col>
        </Row>
        <Row className='text-white mb-4'>
          <Col className='d-flex justify-content-between'>
            {steps.map((s,index)=>{
              const stepNumber = index+1;
              const isCompleted = stepNumber < step;
              const isCurrent = stepNumber == step;
              
              return (
                  <div key={index}
                    className="text-center"
                    style={{flex:1}}>
                    <div className='circle'
                    style={{
                      background: isCompleted ? "linear-gradient(135deg, #00c853, #2962ff)":isCurrent
                      ? "linear-gradient(135deg, #0077b6, #00b4d8)" : "#6c757d",
                    }}
                    >
                      {isCompleted ? "✓" : stepNumber}
                    </div >
                    <div className='circletitle'>
                      {s.title}
                    </div>
                    <small className='circlesubtitle'>{s.subtitle}</small>
                  </div>
              );
            })}
          </Col>
        </Row>


        <Row className='justify-content-center'>
          <Col md={8}>
            <Card className='shadow-lg rounded-4 p-4'>
              <Card.Body className="text-center">
                {step === 0 ? (
                  <>
                    <h1>Welcome</h1>
                  </>
                ):(
                  <h4></h4>
                )}
                {step === 1 ? (
                  <>
                  <Project1/>
                  </>
                ):(
                  <h4></h4>
                )}
                {step === 2 ? (
                  <>
                    <div className="text-center mb-4">
                            <div className="icon-container mb-3" style={{
                                background:"linear-gradient(135deg, #00c853, #2962ff)",
                                borderRadius: '50%',
                                padding: '10px',
                                display: 'inline-block'
                            }}>
                                <BsSuitcaseLg style={{ fontSize: '2rem', color: "white" }} />
                            </div>
                            <h4 className="mb-2">Professional Status</h4>
                            <p className="text-muted">Tell us about your experience level</p>
                        </div>
                              <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                  <Form.Label>Professional Status*</Form.Label>
                                  <div className="d-flex flex-column gap-3 mt-2">
                                    {/* Fresher Option */}
                                    <Card
                                      onClick={() => handleStatusChange("fresher")}
                                      border={selectedStatus === "fresher" ? "primary" : "light"}
                                      style={{ cursor: "pointer" }}
                                      className={`shadow-sm ${
                                        selectedStatus === "fresher" ? "bg-light" : ""
                                      }`}
                                    >
                                      <Card.Body className="d-flex">
                                        <Form.Check
                                          type="radio"
                                          name="status"
                                          checked={selectedStatus === "fresher"}
                                          onChange={() => handleStatusChange("fresher")}
                                          className="me-3 mt-1"
                                        />
                                        <div>
                                          <div className="fw-bold">
                                            Fresher (0-1 years experience)
                                          </div>
                                          <div className="text-muted small">
                                            Recent graduate or new to the workforce
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>

                                    {/* Experienced Option */}
                                    <Card
                                      onClick={() => handleStatusChange("experienced")}
                                      border={selectedStatus === "experienced" ? "primary" : "light"}
                                      style={{ cursor: "pointer" }}
                                      className={`shadow-sm ${
                                        selectedStatus === "experienced" ? "bg-light" : ""
                                      }`}
                                    >
                                      <Card.Body className="d-flex">
                                        <Form.Check
                                          type="radio"
                                          name="status"
                                          checked={selectedStatus === "experienced"}
                                          onChange={() => handleStatusChange("experienced")}
                                          className="me-3 mt-1"
                                        />
                                        <div>
                                          <div className="fw-bold">Experienced Professional</div>
                                          <div className="text-muted small">
                                            Have prior work experience
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                  </div>
                                </Form.Group>

                                
                              </Form>
                           
                   </>                    
                ):(
                  <h4></h4>
                )}
                { step === 3 ?(
                  <>
                    <FaAward size={60} color="#000000ff" />
                  <div className="p-4 bg-light rounded">
                    <h3 className="text-center mb-1">Educational Background</h3>
                    <div className="text-center text-muted mb-4">
                      Add your educational qualifications
                    </div>
                    <h5 className="mb-2">Educational Qualifications</h5>
                    {qualifications.map((q, idx) => (
                      <Form className="mb-3" key={idx}>
                        <Row>
                          <Col>
                            <Form.Group>
                              <Form.Label>Education Level</Form.Label>
                              <Form.Select
                                name="level"
                                value={q.level}
                                onChange={e => handleChange(idx, e)}
                              >
                                <option>Select level</option>
                                <option>Secondary</option>
                                <option>Bachelor's</option>
                                <option>Master's</option>
                                <option>PhD</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group>
                              <Form.Label>Institution Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="institution"
                                value={q.institution}
                                onChange={e => handleChange(idx, e)}
                                placeholder="University/College name"
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group>
                              <Form.Label>Course/Degree</Form.Label>
                              <Form.Control
                                type="text"
                                name="degree"
                                value={q.degree}
                                onChange={e => handleChange(idx, e)}
                                placeholder="e.g., B.Tech Computer Science"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group>
                              <Form.Label>Score/Grade</Form.Label>
                              <Form.Control
                                type="text"
                                name="score"
                                value={q.score}
                                onChange={e => handleChange(idx, e)}
                                placeholder="e.g., 8.5 CGPA, 85%"
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group>
                              <Form.Label>Year of Completion</Form.Label>
                              <Form.Control
                                type="text"
                                name="year"
                                value={q.year}
                                onChange={e => handleChange(idx, e)}
                                placeholder="e.g., 2023"
                              />
                            </Form.Group>
                          </Col>
                          <Col xs="auto" className="d-flex align-items-end">
                            <Button
                              variant="outline-danger"
                              onClick={() => handleRemove(idx)}
                              disabled={qualifications.length === 1}
                            >
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    ))}
                    <div className="text-end mt-3">
                      <Button variant="primary" onClick={handleAdd}>
                        + Add Education
                      </Button>
                    </div>
                  </div>
                  </>
                ):(
                  <h4></h4>
                )}
                {step === 4 ? (
                  <>
                    <div className="app-bg min-vh-100 d-flex flex-column">
                      
                      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
                        <div
                          className="bg-white shadow rounded-4 p-4 p-md-5 w-100"
                          style={{ maxWidth: 900 }}
                        >
                       
                          <div className="text-center mb-4">
                            <div
                              className="d-inline-block mb-3 rounded-circle"
                              style={{
                                background:"linear-gradient(135deg, #00c853, #2962ff)",
                                color:"#ffff",
                                width: 70,
                                height: 70,
                              }}
                            >
                              {/* <i
                                className="bi bi-briefcase"
                                style={{
                                  fontSize: "2rem",
                                  color: "#fff",
                                  lineHeight: "70px",
                                }}
                              ></i> */}
                              <FaRegFileAlt  style={{ color: "white", fontSize: "28px" ,position: "relative", top:"20px" }} />
                            </div>
                            <h4>Skills & Portfolio</h4>
                            <span className="text-muted">Showcase your abilities and work</span>
                          </div>

                          {/* Resume Upload */}
                          <Form.Group className="mb-4">
                            <Form.Label>Resume Upload *</Form.Label>
                            <div
                              className="border border-primary rounded d-flex flex-column align-items-center justify-content-center py-5 mb-3 bg-light"
                              style={{
                                width: "100%",
                                minHeight: 150,
                                borderStyle: "dashed",
                              }}
                            >
                              {/* Hidden File Input */}
                              <input
                                type="file"
                                id="resumeUpload"
                                accept=".pdf,.doc,.docx"
                                className="d-none"
                                onChange={handleFileChange}
                              />

                              <i
                                className="bi bi-cloud-upload text-primary mb-2"
                                style={{ fontSize: 32 }}
                              ></i>
                              <span>Click to upload your resume</span>
                              <span className="text-muted">PDF, DOC, DOCX (Max 5MB)</span>

                              <Button
                                variant="dark"
                                className="mt-2"
                                size="sm"
                                onClick={() =>
                                  document.getElementById("resumeUpload").click()
                                }
                              >
                                Upload Resume
                              </Button>

                              {resumeFile && (
                                <small className="text-success mt-2">
                                  Uploaded: {resumeFile}
                                </small>
                              )}
                            </div>
                          </Form.Group>

                          {/* Areas of Interest */}
                          <Form.Label>Areas of Interest</Form.Label>
                          <Row className="mb-4">
                            {interestOptions.map((i) => (
                              <Col xs={12} md={6} lg={4} key={i} className="mb-2">
                                <Form.Check
                                  type="checkbox"
                                  id={`interest-${i}`}
                                  label={i}
                                  checked={selectedInterests.includes(i)}
                                  onChange={() => toggleInterest(i)}
                                />
                              </Col>
                            ))}
                          </Row>

                          {/* Input Fields */}
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-4">
                                <Form.Label>Technical Skills</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="e.g., JavaScript, React, Python, AWS, SQL..."
                                />
                              </Form.Group>
                              <Form.Group className="mb-4">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="https://linkedin.com/in/yourprofile"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-4">
                                <Form.Label>Certifications & Achievements</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Professional certifications, online courses, awards..."
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Portfolio Website</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="https://yourportfolio.com"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          {/* Navigation */}
                         
                        </div>
                      </div>
                    </div>

                  </>
                ):(
                  <h4></h4>
                )}
                {step === 5 ? (
                  <>
                      <div className="workexp-section">
                        <Container className="workexp-container">
                        
                          <div className="icon-container">
                            <div className="icon">🏢</div>
                          </div>
                          <h4 className="workexp-title">Work Experience</h4>
                          <p className="workexp-subtitle">Detail your professional experience</p>
                          <Form onSubmit={handleSubmit} className="workexp-form">


                            {qualifications.map((q, idx) => (
                            <div key={idx}> <Form.Group className="mb-3 text-start">
                              <Form.Label>Job Title</Form.Label>
                              <Form.Control
                                type="text"
                                name="jobTitle"
                                placeholder="e.g. Software Engineer"
                                value={q.jobTitle}
                                // onChange={() => {handleChange()}}
                                onChange={(e) => handleChange(0, e)}
                                required
                              />
                            </Form.Group>

                            <Form.Group className="mb-3 text-start">
                              <Form.Label>Company</Form.Label>
                              <Form.Control
                                type="text"
                                name="company"
                                placeholder="e.g. Google"
                                value={q.company}
                                onChange={e => handleChange(idx, e)}
                                required
                              />
                            </Form.Group>

                            <Form.Group className="mb-3 text-start">
                              <Form.Label>Duration</Form.Label>
                              <Form.Control
                                type="text"
                                name="duration"
                                placeholder="e.g. Jan 2020 - Dec 2023"
                                value={q.duration}
                                onChange={e => handleChange(idx, e)}
                                required
                              />
                            </Form.Group>

                            <Form.Group className="mb-3 text-start">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                placeholder="Describe your role and achievements"
                                value={q.description}
                                onChange={e => handleChange(idx, e)}
                              />
                            </Form.Group>
                            
                            </div>
                            ))}
                            



                            <Button type="submit" className="save-btn w-100">
                              Save Experience
                            </Button>
                          </Form>
                        </Container>
                      </div>

                  </>
                ):(
                  <h4></h4>
                )}
                

                <div className="d-flex justify-content-between mt-5">
                  {/* <Button variant = "light"
                          onClick={prevStep}
                          disabled = {step == 1}>
                     ← Previous
                  </Button>
                   <Button variant = "success"
                          onClick={nextStep}
                          disabled = {step == totalSteps}>
                     Continue →
                  </Button> */}
                  <Button 
                        variant="light" 
                        onClick={prevStep} 
                        disabled={step === 0}
                      >
                        ← Previous
                      </Button>
                      <Button 
                        id="continue"
                        variant="success" 
                        onClick={nextStep} 
                        disabled={step === totalSteps}
                      >
                        Continue <CalendarOutlined />
                    </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Registrationform ;