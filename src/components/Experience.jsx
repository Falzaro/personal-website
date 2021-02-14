import "../styles/experience.scss";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__container">
        <div className="experience__jobTitleWrapper">
          <div className="companyAndTimeline">
            <h3>NetApp</h3>
            <p className="timeline">September 2020 - Present</p>
          </div>
          <p className="jobPosition">React and Django Developer Intern</p>
        </div>
        <ul>
          <li>
            Transitioned the company from using JQuery to React, a simple, fast,
            and scalable frontend library
          </li>
          <li>
            Used Authorization Code Flow to solve an authentication issue that
            the backend team was facing with Azure, saving 6 weeks of work
          </li>
          <li>
            Integrated React and Django to enable frontend and backend
            communication
          </li>
          <li>
            Wrote code that fetched JWT from Django API and then decoded it to
            obtain user’s information
          </li>
          <li>
            Used Docker to containerize React for development and deployment
          </li>
          <li>
            Gained mastery of Git, BitBucket, Atlassian, and other project
            management and collaboration tools
          </li>
        </ul>
        <div className="experience__jobTitleWrapper">
          <div className="companyAndTimeline">
            <h3>Sensor Dynamix</h3>
            <p className="timeline">May 2020 - August 2020</p>
          </div>
          <p className="jobPosition">
            React Native developer and UI/UX Designer Intern
          </p>
        </div>
        <ul>
          <li>
            Implemented Context API to reduce the number of requests made to the
          </li>
          <li>
            Developed a login page with React Native and validated user inputs
            with RegEx
          </li>
          <li>
            Set up Stripe to securely accept online payments, manage customer
            activities, and handle recurring subscriptions
          </li>
          <li>
            Used OAuth and Firebase Authentication to allow users to sign in
            with their Google account
          </li>
          <li>
            Responsible for designing both mobile app and website using Adobe XD
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
