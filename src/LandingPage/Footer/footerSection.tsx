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
        "Terms",
        "Privacy Policy",
      ],
    },
    {
      sectionName: "Support",
      values: [
        "Careers",
        "For Partners",
        "Contact Us",
      ],
    },
    {
      sectionName: "Our Address",
      values: ["Name : Dummy", "Contact : 9098000000 ", "Email: dummy.com", "Address : dummy"],
    },
  ];

  return (
    <>
    <div className="straightLine"></div>
    <div className="footerMain">
      
      <div className="footerMainOne">
        <div className="leftSection">
          <img
            className="mainlogo"
            alt="logo"
            src={process.env.PUBLIC_URL + "Asserts/logooo.png"}
          />
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
      </div>
    </div>
    </>
  );
}

export default FooterSection;
