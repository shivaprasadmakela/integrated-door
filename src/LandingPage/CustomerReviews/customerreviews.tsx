import "./customerreview.css";

interface CustomerReview {
  customerName: string;
  review: string;
  profile: string;
}

function CustomerReview() {
  const customerReviews: CustomerReview[] = [
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
      <h1 className="reviewTitle">
        Here from our <span className="titleSpan">customers</span>
      </h1>
      <div className="allReviewsgrid">
        {customerReviews.map((review, index) => (
          <div className="eachreview" key={index}>
            <img className="customerProfile" src={process.env.PUBLIC_URL + review.profile}></img>
            <div className="reviewText">
              <p className="customerName">{review.customerName}</p>
              <p className="customerReview">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
