import Header from '../../components/Header'
import HeaderImage from '../../images/logo2.png'
import { MdEmail } from 'react-icons/md'
// import { FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import {BsInstagram} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Want to Contact the Support Team? Your can reach us through the given 
    Social Handles below. We will be here to hear from you!
    </Header>

    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:ayodejiemmanuel515@gmail.com" target="_blank" rel="noreferrer noopener"> <MdEmail/> </a>
          {/* <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"> <FaFacebookF/> </a> */}
          <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"> <BsInstagram/> </a>
          <a href="https://wa.me/+2348148672181" target="_blank" rel="noreferrer noopener"> <IoLogoWhatsapp/> </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact