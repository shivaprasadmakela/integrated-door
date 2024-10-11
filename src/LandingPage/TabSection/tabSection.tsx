import React, { useState, ReactNode } from "react";
import "./tabSection.css";

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
  const tabs: TabProps[] = [
    {
      label: "PHASE ONE DELIVERED",
      children: (
        <div className="tabContent1">
          <div className="tabImagesContainer">
            <img
              className="tabImage"
              alt="tabimage1"
              src={process.env.PUBLIC_URL + "Asserts/tabimage1.svg"}
            />
            <img
              className="tabImage2"
              alt="tabimage2"
              src={process.env.PUBLIC_URL + "Asserts/tabimage2.svg"}
            />
          </div>
          <div className="tabTextContainer">
            <h1 className="tabMainText">Delivering High <br/> <span className="spanText">Quality Projects</span></h1>
            <h5 className="tabSubText">Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate</h5>
            <p>Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis
bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan
ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
mauris vitae erat consequat auctor.</p>
          </div>
        </div>
      ),
    },
    {
      label: "PHOTOS",
      children: (
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw"
            alt="Tab 2"
          />
          <p>Tab 2 content</p>
        </div>
      ),
    },
    {
      label: "OUR WORK",
      children: (
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7Y713wstirF-PvKJa6OioS83ozc-BeFAzjjyndv58ZnfyaZK0g"
            alt="Tab 3"
          />
          <p>Tab 3 content</p>
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
        
      <div>
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
    </div>
  );
};

const TabButtons: React.FC<TabButtonsProps> = ({
  buttons,
  changeTab,
  activeTab,
}) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => (
        <button
          key={button}
          className={button === activeTab ? "active" : ""}
          onClick={() => changeTab(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default TabSection;
