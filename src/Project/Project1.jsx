import React, { useRef,useState } from 'react';
// import '../Styles/Professional.css';
import { Button } from 'react-bootstrap';
import { FaUserGroup } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { GrUpload } from "react-icons/gr";
import {Row,Col} from 'react-bootstrap';


function Horizontal (){const handleUploadClick = () => {
    // fileInputRef.current.click();
  };
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
      
      console.log('File selected:', file.name);

    }
  };
  const [uploadedImage, setUploadedImage] = useState(null);

  return( <div className='procommon'>
            <Button className='proicon'><FaUserGroup className='progroup' size={25} /></Button>
            <h3 className='proheading'>Personal Information</h3>
            <h6 className='proheading_1'>Let's create your professional profile</h6>
      
            <div className='procircle'>
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className='profile-image'
                />
              ) : (
                <>
                  <span className='procamera'><IoCameraOutline size={50} /></span>
                  <p className='propara'>Upload Photo</p>
                </>
              )}
      
              <input
                type="file"
                accept="image/*"
                // ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Button className='probutton' onClick={handleUploadClick}>
                <GrUpload size={20} />
              </Button>
            </div>



      
            {/* Forms */}
            <div className='formfnde'>
              <Row>
                <Col lg={6}>
                  <form>
                    <label className='fullname text-align-center '>Full Name*</label><br />
                    <input type='text' placeholder=' Enter your Full Name' className='formname' />
                  </form>
                </Col>
                <Col lg={6}>
                  <form>
                    <label className='fullname'>Date of Birth*</label><br />
                    <input type='date' placeholder='mm/dd/yyyy' className='formname' />
                  </form>
                </Col>
              </Row>
            </div>
      
            <div className='formeapn'>
              <Row>
                <Col lg={6}>
                  <form>
                    <label className='fullname'>Email Address*</label><br />
                    <input type='email' placeholder='email@example.com' className='formname' />
                  </form>
                </Col>
                <Col lg={6}>
                  <form>
                    <label className='fullname'>Phone Number*</label><br />
                    <input type='text' placeholder='+91 XXXXX XXXXX' className='formname' />
                  </form>
                </Col>
              </Row>
            </div>
          
        
      
    
  
  
{/* Border */}
   <div className='bord'></div>                                                                                      </div>                                                                                                                                  );
  }
 export default Horizontal;