import { Link } from 'react-router-dom'
import Logo from '../images/logo coil.png'
import { FaLinkedin } from 'react-icons/fa'
// import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'





const Footer = () => {
  return (
    <footer>   
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo" >
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    CoilSkin is an e-commerce platform focused 
                    on transforming the beauty industry by offering 
                    authentic, affordable, and accessible skincare 
                    and haircare products.
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/company/coilskin/" target="_blank" rel='noreferrer noopener' > <FaLinkedin /> </a>
                    {/* <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener' > <FaFacebookF /> </a> */}
                    <a href="https://x.com/coilskin?s=21" target="_blank" rel='noreferrer noopener' > <AiOutlineTwitter /> </a>
                    <a href="https://instagram.com/CoilSkinn" target="_blank" rel='noreferrer noopener' > <AiFillInstagram /> </a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Team</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/about">Blog</Link>
                <Link to="/plans">Case Studies</Link>
                <Link to="/about">Events</Link>
                <Link to="/contact">Communities</Link>
                <Link to="/home /FQAS">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Support</Link>
            </article>

        </div>

        <div className="footer__copyright">
            <small>2025 CoilSkin &copy; All Rights Reserved</small>
        </div>


    </footer>
  )
}

export default Footer