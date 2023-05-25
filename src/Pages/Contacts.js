import "../components/Pages.css/Contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="container">
        {" "}
        <h1>Contact US</h1>
        <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iaUCpD..oJzA/v1/1200x-1.jpg"
            alt="DJI company"
          />
        <div className="contacts-item">
        <div className="contacts-text">
          <h2>Headquarters</h2>
          <ul>
            <li>Online Customer Support:</li>
            <li>Marketing:</li>
            <li>Media Inquiries:</li>
            <li>Talent Recruitment:</li>
            <li>Government Relationship Maintenance:</li>
            <li>Strategic Alliances and Investments:</li>
            <li>Investor Relations:</li>
            <li>Enterprise Solutions:</li>
            <li>Address:</li><br/>
            <li>Tel:</li>
          </ul>
        </div>
        <div className="contacts-a">
          <dd>
            <a href="https://www.dji.com/support">click here</a>
          </dd>
          <dd>
            <a href="mailto:marketing@dji.com">marketing@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:pr@dji.com">pr@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:hr@dji.com">hr@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:govrelations@dji.com">govrelations@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:corpdev@dji.com">corpdev@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:investor.relations@dji.com">
              investor.relations@dji.com
            </a>
          </dd>
          <dd>
            <a href="mailto:enterprise@dji.com">enterprise@dji.com</a>
          </dd>
          <dd>
            DJI Sky City,No.55 Xianyuan Road,Nanshan District,Shenzhen, China
          </dd>
          <dd>+86 (0)755 26656677</dd>
        </div>
        </div>
      
      <div className="contacts-item">
          <div className="contacts-text2">
          <h2>DJI Studio</h2>
          <ul>
            <li>Office Hours:</li>
            <li>Support:</li>
            <li>Marketing:</li>
            <li>Aerial Filming:</li>
          </ul>
        </div>
        <div className="contacts-a2">
          <dd>Monday to Friday, 09:30-18:30</dd>
          <dd>
            <a href="https://www.dji.com/support">click here</a>
          </dd>
          <dd>
            <a href="mailto:marketing@dji.com">marketing@dji.com</a>
          </dd>
          <dd>
            <a href="mailto:studio@dji.com">studio@dji.com</a>
          </dd>
        </div>
      </div>
      </div>
     
    </div>
  );
}
