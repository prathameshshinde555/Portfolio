import Link from 'components/Link'
import './index.css'

const Footer = () => (
    <footer className="footer">
        <span className="footer__date">
            {`© ${new Date().getFullYear()} Prathamesh Shinde.`}
        </span>
        <Link secondary className="footer__link" href="https://www.linkedin.com/in/prathameshshinde555/" target="_self">
            Crafted by yours truly
        </Link>
    </footer>
)

export default Footer
