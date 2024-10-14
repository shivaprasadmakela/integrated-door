import React from "react";
import TopSection from "../TopSection/topSection";
import TabSection from "../TabSection/tabSection";
import OurGallery from "../OurGallery/ourGallery";

function AllSections() {
  return (
    <React.Fragment>
      <TopSection />
      <OurGallery />
      <TabSection />

    </React.Fragment>
  );
}

export default AllSections;
