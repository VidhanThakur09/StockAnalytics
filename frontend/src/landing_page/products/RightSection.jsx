import React from 'react'

export default function RightSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-5 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {(tryDemo)&&(<a href={tryDemo} style={{"textDecoration":"none"}}>TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
            {(learnMore)&&(<a href={learnMore} style={{"textDecoration":"none","marginLeft":"40%"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
          </div>
          {(googlePlay && appStore) && (
            <div className="mt-3">
              <a href={googlePlay}><img src="images/googlePlayBadge.svg" alt="Google Play" /></a>
              <a href={appStore} style={{"marginLeft":"20%"}}><img src="images/appstoreBadge.svg" alt="App Store" /></a>
            </div>
          )}
        </div>
        <div className="col "></div>
        <div className="col-6" >
          <img src={imageUrl}/>
        </div>
      </div>
    </div>
  )
}
