import './style.scss';
import FooterCopyrightBar from './copyright-bar';
import FooterInfo from './footer-info';

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterInfo />
      <FooterCopyrightBar />
    </footer>
  );
};

export default Footer;
