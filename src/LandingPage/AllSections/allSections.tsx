import React from "react";
import TopSection from "../TopSection/topSection";
import TabSection from "../TabSection/tabSection";
import OurGallery from "../OurGallery/ourGallery";
import TopCards from "../TopSection/topCards";
import CustomerReview from "../CustomerReviews/customerreviews";
import FooterSection from "../Footer/footerSection";
import WhyYouShould from "../WhyYouShould/whyYouShould"
import ContactFormNew from "../ContactFormNew/contactFormNew";


function AllSections() {
  return (
    <React.Fragment>
      <TopSection />
      <OurGallery />
      <TabSection />
      <WhyYouShould />
      <TopCards />
      <CustomerReview />
      <ContactFormNew />
      <FooterSection />
    </React.Fragment>
  );
}

export default AllSections;
