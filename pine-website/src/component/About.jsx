import "../style/About.css";

const About = () => {
  return (
    <>
      <h1 style="color:#e7ebd4">Pine's Personal Website</h1>
      <img src="pine_cph.jpg" width="100" alt="Pine in Copenhagen" />

      <h3>Facts about Pine</h3>
      <ul>
        <li id="name">Full Name: Teechutha Netcharussaeng</li>
        <li class="places">Hometown: Bangkok, Thailand</li>
        <li class="places">College: Pomona College</li>
        <li>
          Fun fact: I was named after
          <a href="https://en.wikipedia.org/wiki/Pine_(email_client)">
            an email reader!</a>
        </li>
      </ul>
    </>
  );
};

export default About;