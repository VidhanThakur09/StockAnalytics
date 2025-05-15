import React from 'react'

export default function Stats() {
    return (
    <div className='container p-3' style={{"margin-top":"10vh"}}>
        <div className="row">
            <div className="col-lg-5 col-sm-12 pr-5">
                <h1 className='mb-5' style={{"fontSize":"2rem"}}>Trust with confidence</h1>

                <h2 style={{"fontSize":"1.25rem"}} >Customer-first always</h2>
                <p style={{"fontSize":"1rem"}} className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                <h2 style={{"fontSize":"1.25rem"}}>No spam or gimmicks</h2>
                <p style={{"fontSize":"1rem"}} className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                <h2 style={{"fontSize":"1.25rem"}}>The Zerodha universe</h2>
                <p style={{"fontSize":"1rem"}} className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h2 style={{"fontSize":"1.25rem"}}>Do better with money</h2>
                <p style={{"fontSize":"1rem"}} className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-lg-7 col-sm-12 ">
                <img className='mx-5' src="images/ecosystem.png" alt="ecosystem" style={{"width": "90%"}} />
                <div className='text-center'>
                    <a  style={{"textDecoration":"none"}} href="" className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a style={{"textDecoration":"none"}} href="">Try Kite demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
            </div>
        </div>
    </div>
    )
}