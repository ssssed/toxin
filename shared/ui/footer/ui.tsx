import './style.scss';
import { FooterInfo, FooterCopyrightBar } from './ui/';

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterInfo />
      <FooterCopyrightBar />
    </footer>
  );
};

export { Footer };
