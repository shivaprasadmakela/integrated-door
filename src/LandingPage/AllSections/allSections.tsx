import React from "react";
import TopSection from "../TopSection/topSection";
import TabSection from "../TabSection/tabSection";
import OurGallery from "../OurGallery/ourGallery";
import WhereWeAreLocated from "../WhereWeAreLocated/whereWeAreLocated";

function AllSections() {
  return (
    <React.Fragment>
      <TopSection />
      <OurGallery />
      <TabSection />
      <WhereWeAreLocated />
    </React.Fragment>
  );
}

export default AllSections;
