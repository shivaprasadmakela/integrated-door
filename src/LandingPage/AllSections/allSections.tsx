import React from "react";
import TopSection from "../TopSection/topSection";
import TabSection from "../TabSection/tabSection";
import OurGallery from "../OurGallery/ourGallery";
import CustomerReview from "../CustomerReviews/customerreviews";
import FooterSection from "../Footer/footerSection";

function AllSections() {
  return (
    <React.Fragment>
      <TopSection />
      <OurGallery />
      <TabSection />
      <CustomerReview />
      <FooterSection />
    </React.Fragment>
  );
}

export default AllSections;
