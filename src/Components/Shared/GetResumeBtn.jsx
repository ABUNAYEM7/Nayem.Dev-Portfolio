import { motion } from "framer-motion";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; 
import { FaCloudDownloadAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const GetResumeBtn = ({ text }) => {

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1fJAoL9GLXEeiBgs0jyqi-AC5XSdqi4l3';

    // window.location.href = resumeUrl;

    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = "MD_ABU_NAYEM_RESUME.pdf"
    link.click()

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Resume Download Start",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div onClick={downloadResume}>
      <AwesomeButton 
      type="primary">{text} <span className="mx-2"><FaCloudDownloadAlt size={25}/></span></AwesomeButton>
    </div>
  );
};

export default GetResumeBtn;
