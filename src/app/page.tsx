import Link from "next/link";
import React, { useState, useEffect } from 'react'

// These are the values that need to be updated by DB!
let email = 4
let text = 3
let ads = 5

// update these with the max assessment score
let email_size = 5
let text_size = 5
let ad_size = 5

export default function Home() {
  return (
    
    <main>
      <div className="topBar">
        <div className="container">
          <div className="boxLeft">
            <h1>Cybersecurity Assessment</h1> 
          </div>
          <div className="boxRight">
            <Link href="/">
              <button className="button">Logout</button>
            </Link> 
          </div>
        </div>
      </div>
      <div>
          <div>
            <div id="Email" className="homeBox">

              <div className="containerLeft">
                <p>Phishing email assessment</p>
                <p>Assessment score: {email} / {email_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/">
                  <button className="button">Email</button>
                </Link> 
              </div>
            </div>
            <div id="text" className="homeBox">
              <div className="containerLeft">
                <p>Phishing Text assessment</p>
                <p >Assessment score: {text} / {text_size} </p>
              </div>
              <div className="containerRight">
                <Link href="/">
                  <button className="button">Text</button>
                </Link> 
              </div>
            </div>
            <div id="ads" className="homeBox">
              <div className="containerLeft">
                <p>Scam advertisements assessment</p>
                <p>Assessment score: {ads} / {ad_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/">
                  <button className="button">Scam Ads</button>
                </Link> 
              </div>
            </div>           
          </div>
        </div>
    </main>
  );
}
