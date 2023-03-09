import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about" >
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Computer Engineering student at Polytechnic University of the Philippines - Manila.
                    I am currently on my 4th year as a student, and I have completed two internships in different companies.</p>
                    <p>I have interned as a fullstack system development intern and have experienced working with building and maintaining a HRIS module through the use of Python.</p>
                    <p>As well as building the frontend component of a website for multiple clients through the use of Quasar Framework.</p>
                    <p>I have not just gained technical experience from these internships but I have also learned how to work with a team of professional programmers and functional consultants, as well as communicating with these professionals..</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-device-desktop" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using JavaScript, React, Vue, Quasar, HTML, and CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-play4" />
                </span>
                <div className="desc">
                    <h3>Game Development</h3>
                    <p>I have built games as a part of my coursework through the use of Unity Engine and C# programming.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Mobile Development</h3>
                    <p>I have experience in developing mobile applications through the use of Android Studio, React Native and Cordova.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
