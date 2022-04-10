import flogo from "../asset/footer-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          In an emergency
          <ul>
            <li>514-398-3000 (downtown campus)</li>
            <li>514-398-7777 (Macdonald campus)</li>
          </ul>
        </div>
        <div>
          Visit
          <ul>
            <li>
              <a href="https://maps.mcgill.ca/">Campus Map</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/ZUN8S2Ec4MU5jGNV9">
                845 Sherbrooke Street West, Montréal (Québec) H3A 0G4
              </a>
            </li>
          </ul>
        </div>
        <div>
          Get in touch
          <ul>
            <li>
              <a href="https://www.mcgill.ca/contact-us/">Contact Us</a>
            </li>
            <li>
              <a href="http://ask.mcgill.ca/">AskMcGill</a>
            </li>
            <li>
              <a href="https://www.mcgill.ca/hireastudent/">Hire a student</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer footer-bottom">
        <img src={flogo} alt="McGill Logo" />
        <div>Copyright © 2022 McGill University. </div>
        <a href="https://www.mcgill.ca/accessibility">Accessibility</a>
        <a href="https://www.mcgill.ca/privacy-notice">Privacy Notice</a>
        <a href="https://www.mcgill.ca/contact-us/">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;
