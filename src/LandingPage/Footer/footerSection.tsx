import "./footerSection.css";

interface footerSections {
  sectionName: string;
  values: string[];
}

function FooterSection() {
  const footerSections: footerSections[] = [
    {
      sectionName: "Company",
      values: [
        "About Us",
        "Careers",
        "For Partners",
        "Terms",
        "Privacy Policy",
        "Contact Us",
      ],
    },
    {
      sectionName: "Support",
      values: [
        "About Us",
        "Careers",
        "For Partners",
        "Terms",
        "Privacy Policy",
      ],
    },
    {
      sectionName: "Explore",
      values: ["News", "Home Loans", "Sitemaps"],
    },
  ];

  return (
    <div className="FooterMain">
      <div className="FooterMain1">
        <div className="leftSection">
          <img
            className="mainlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/dummy-logo-3.png"}
          />
          <span className="lefth1">Subscribe to our Newsteller</span>
          <span className="lefth2">
            Be The First To Know About Our New Launches,Updates And More
          </span>
          <div className="subscribeGrid">
          <input className="textbox" placeholder="Enter your email"></input>
          <button className="subscribeButton">Subscribe</button>
          </div>

        </div>
        <div className="rightSection">
          {footerSections.map((section, index) => (
            <div className="eachSection" key={index}>
              <span className="sectionheader">{section.sectionName}</span>
              {section.values.map((value, index) => (
                <span className="values" key={index}>
                  {value}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="lastSection">
        <span className="leftLastText">
          © 2024 Fincity property, All Rights Reserved
        </span>
        <div className="rightLastGrid">
          <img
            className="smlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/fb.svg"}
          />
          <img
            className="smlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/insta.svg"}
          />
          <img
            className="smlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/twitter.svg"}
          />
          <img
            className="smlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/pintrest.svg"}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
