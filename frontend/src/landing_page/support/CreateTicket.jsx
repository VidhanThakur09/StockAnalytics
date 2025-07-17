import React from 'react'

export default function CreateTicket() {
  // Define the data for the sections to avoid repetition
  const sections = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Account Opening", // Example: you'd likely have different titles/links here
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
  ];

  return (
    <div className="container p-4 p-md-5">
      <div className="row mb-4">
        <h1 className='fs-5 fs-md-4 text-muted text-center text-md-start'>
          To create a ticket, select a relevant topic.
        </h1>
      </div>
      <div className="row p-2 justify-content-center">
        {sections.map((section, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 p-3">
            <h4 style={{"fontWeight": "400","fontSize": "1.1rem"}} className="mb-3">
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> {section.title}
            </h4>
            {section.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a href="" style={{ textDecoration: "none", lineHeight: "2",fontSize: ".9rem" }} className="d-block">
                  {link}
                </a>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}