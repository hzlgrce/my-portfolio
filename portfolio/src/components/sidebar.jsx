import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">&nbsp;&nbsp;Hazel Grace Flores</a></h1>
              <span className="email"><i className="icon-mail"></i> floreshazelgrace@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            
            <div className="colorlib-footer">
              <p><br></br><br></br><br></br><br></br>
              <a href="https://www.facebook.com/heyyzl" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
              &nbsp;&nbsp;
              <a href="https://twitter.com/heyyzl_" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/zlgrce/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/hazel-grace-flores/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
              &nbsp;&nbsp;
              <a href="https://github.com/hzlgrce" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
            </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
