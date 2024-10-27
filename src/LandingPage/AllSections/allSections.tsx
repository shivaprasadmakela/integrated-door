import React from "react";
import TopSection from "../TopSection/topSection";
import TabSection from "../TabSection/tabSection";
import OurGallery from "../OurGallery/ourGallery";
import TopCards from "../TopSection/topCards";
import CustomerReview from "../CustomerReviews/customerreviews";
import FooterSection from "../Footer/footerSection";
import WhyYouShould from "../WhyYouShould/whyYouShould"
import ContactFormNew from "../ContactFormNew/contactFormNew";
import TeamMember from "../teamMembers/teamMember";


function AllSections() {
  return (
    <div>
      <TopSection />
      <TopCards />
      <TeamMember />
      <OurGallery />
      <TabSection />
      <WhyYouShould />
      <CustomerReview />
      <ContactFormNew />
      <FooterSection />
    </div>
  );
}

export default AllSections;
