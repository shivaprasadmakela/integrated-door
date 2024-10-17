import "./footerSection.css";

interface footerSections {
  sectionName: string;
  values: string[];
}

function FooterSection() {
  const footerSections: footerSections[] = [
    {
      sectionName: "Products",
      values: [
        "Our Products",
        "Product Categories",
        "Featured Products",
        "Customer Reviews",
      ],
    },
    {
      sectionName: "Services",
      values: [
        "Service Overview",
        "Support Services",
        "Consultation Services",
        "Client Testimonials",
      ],
    },
    {
      sectionName: "Parents",
      values: [
        "Parent Resources",
        "Parent Support",
        "Feedback",
        "Frequently Asked Questions",
      ],
    },
    {
      sectionName: "Company",
      values: [
        "About Us",
        "Mission & Vision",
        "Team",
        "Corporate Responsibility",
      ],
    },
    {
      sectionName: "Resource Center",
      values: [
        "Blog",
        "Guides & Tutorials",
        "Webinars",
        "E-books",
      ],
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
          © 2024 Integrated, All Rights Reserved
        </span>
      </div>
    </div>
    </>
  );
}

export default FooterSection;
