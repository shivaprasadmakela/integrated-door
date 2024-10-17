import React, { useState, ReactNode } from "react";
import "./tabSection.css";
import VideoCarousel from "./videoCarousel";
import OurWorktab from "./ourWorkTab";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabButtonsProps {
  buttons: string[];
  changeTab: (tab: string) => void;
  activeTab: string;
}

const TabSection = () => {
  // const [isToggled, setIsToggled] = useState(false);

  // const handleToggle = () => {
  //   setIsToggled(!isToggled);
  // };

  const videos = [
    "https://youtu.be/qsKoT__cmAw?si=CZSdi7YWKVklFBGz",
    "https://youtu.be/ZuQuOnYnr3Q?si=3XAPZGrHFz1sAher",
    "https://youtu.be/qsKoT__cmAw?si=CZSdi7YWKVklFBGz",
  ];

  const images = [
    "Asserts/cutpaste laminate door .webp",
    "Asserts/teakwood door_edited.webp",
    "Asserts/prime coated door.webp",
    "Asserts/Frames.webp",
  ];

  const tabs: TabProps[] = [
    {
      label: "PHASE ONE DELIVERED",
      children: (
        <div className="tabContent1">
          {/* <div className="tabImagesContainer" onClick={handleToggle}>
            <img
              className={`tabImage ${isToggled ? "tabImageActive" : ""}`}
              alt="tabimage1"
              src={process.env.PUBLIC_URL + "/Asserts/syntegra-integrated-door.jpg"}
            />
            <img
              className={`tabImage2 ${isToggled ? "tabImage2Active" : ""}`}
              alt="tabimage2"
              src={process.env.PUBLIC_URL + "/Asserts/google-area-separation-doors-1.jpg"}
            />
          </div> */}
          <div className="tabImagesContainer">
            <VideoCarousel videos={videos} />
          </div>
          <div className="tabTextContainer">
            <h1 className="tabMainText">
              Delivering High <br />{" "}
              <span className="mainTextSpan">Quality Projects</span>
            </h1>
            <h5 className="tabSubText">
              Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin
              sed odio sit amet nibh vulputate
            </h5>
            <p className="tabSubText t">
              Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin,
              lorem quis bibendum auctor nisi elit consequat ipsum, nec
              sagittis. Morbi accumsan ipsum velit.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "PHOTOS",
      children: (
        <div>
          <p>Coming Soon</p>
        </div>
      ),
    },
    {
      label: "OUR WORK",
      children: (
        <div className="tabThreeMainContainer">
          <div className="tabThreeTop">
            <OurWorktab />
            <div className="imageContainer">
              {images.map((image, index) => (
                <img
                  key={index} // Adding a unique key using index
                  className="tabThreeImage"
                  src={process.env.PUBLIC_URL + image}
                  alt={"Image" +{index}} // Optionally, adding an alt attribute
                />
              ))}
            </div>
          </div>
          <div className="tabThreeBottom">
            
            <img alt="recimage" src={process.env.PUBLIC_URL + "Asserts/Rectangle 3463592.png"} />
          </div>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tabs-container">
        {/* Tab Buttons */}
        <TabButtons
          buttons={tabs.map((tab) => tab.label)}
          changeTab={changeTab}
          activeTab={activeTab}
        />
        {/* Tab Content */}
        <div className="tab-content">
          {tabs.find((tab) => tab.label === activeTab)?.children}
        </div>
      </div>
      <div className="straightLine"></div>
    </div>
  );
};

const TabButtons: React.FC<TabButtonsProps> = ({
  buttons,
  changeTab,
  activeTab,
}) => {
  return (
    <>
      <div className="tab-buttons">
        {buttons.map((button) => (
          <button
            key={button}
            className={button === activeTab ? "tabButton active" : "tabButton"}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabSection;
