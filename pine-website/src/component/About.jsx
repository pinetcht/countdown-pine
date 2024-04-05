import "../style/About.css";
import pinePic from "../assets/pine_cph.jpg";

const About = () => {
  return (
    <>
      <h1 style={{ color: '#e7ebd4' }}>Pine's Personal Website</h1>
      <img src={pinePic} width="100" alt="Pine in Copenhagen" />

      <h3>Facts about Pine</h3>
      <ul>
        <li id="name">Full Name: Teechutha Netcharussaeng</li>
        <li className="places">Hometown: Bangkok, Thailand</li>
        <li className="places">College: Pomona College</li>
        <li>
          Fun fact: I was named after&nbsp; 
          <a href="https://en.wikipedia.org/wiki/Pine_(email_client)">
            an email reader!</a>
        </li>
      </ul>
    </>
  );
};

export default About;