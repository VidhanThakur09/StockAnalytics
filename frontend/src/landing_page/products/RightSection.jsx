import React from 'react'

export default function RightSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center"> {/* Added d-flex and align-items-center for vertical alignment */}
        <div className="col-12 col-md-5 mt-md-5 p-3 order-md-1"> {/* On small screens, takes full width, then 5 on md and up. Order for md and up */}
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex flex-column flex-md-row justify-content-md-start align-items-md-center"> {/* Flex for links */}
            {(tryDemo)&&(<a href={tryDemo} style={{"textDecoration":"none", "marginRight": "1.5rem"}}>TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
            {(learnMore)&&(<a href={learnMore} style={{"textDecoration":"none"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
          </div>
          {(googlePlay && appStore) && (
            <div className="mt-3 d-flex flex-column flex-md-row align-items-center justify-content-start"> {/* Flex for app badges */}
              <a href={googlePlay} className="mb-2 mb-md-0 me-md-3"><img src="images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" style={{"maxWidth": "150px"}}/></a>
              <a href={appStore}><img src="images/appstoreBadge.svg" alt="App Store" className="img-fluid" style={{"maxWidth": "150px"}}/></a>
            </div>
          )}
        </div>
        <div className="col-12 col-md-6 p-3 order-md-2"> {/* On small screens, takes full width, then 6 on md and up. Order for md and up */}
          <img src={imageUrl} className="img-fluid"/> {/* Added img-fluid for responsive images */}
        </div>
      </div>
    </div>
  )
}