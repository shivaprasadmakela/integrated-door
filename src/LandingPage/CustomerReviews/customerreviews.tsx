import "./customerreview.css";

interface CustomerReviewData {
  customerName: string;
  review: string;
  profile: string;
}

function CustomerReview() {
  const customerReviews: CustomerReviewData[] = [
    {
      customerName: "NATASHA",
      review:
        "Lorem ipsum proin gravida nibh vel velit auctor kasde aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.",
      profile: "Asserts/customer1.svg",
    },
    {
      customerName: "ROHAN",
      review:
        "Lorem ipsum proin gravida nibh vel velit auctor kasde aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.",
      profile: "Asserts/customer2.svg",
    },
    {
      customerName: "ABHIRAM",
      review:
        "Lorem ipsum proin gravida nibh vel velit auctor kasde aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.",
      profile: "Asserts/customer3.svg",
    },
    {
      customerName: "NYRA",
      review:
        "Lorem ipsum proin gravida nibh vel velit auctor kasde aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.",
      profile: "Asserts/customer4.svg",
    },
  ];

  return (
    <div className="customerReviewMain">
      <h1 className="mainTextHeading">
        Here from our
        <span className="mainTextHeading mainTextSpan"> customers</span>
      </h1>
      <div className="allReviewsgrid">
        {customerReviews.map((review, index) => (
          <div className="eachreview" key={index}>
            <img
              className="customerProfile"
              alt={"customerProfile" + index}
              src={process.env.PUBLIC_URL + review.profile}
            ></img>
            <div className="reviewText">
              <p className="customerName">{review.customerName}</p>
              <p className="customerReview">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="contactFormNew"></div>
    </div>
  );
}

export default CustomerReview;
