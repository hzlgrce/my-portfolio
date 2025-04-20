import React, { Component } from 'react'
import proj1 from '../images/proj-1.jpg'
import proj2 from '../images/proj-2.jpg'
import proj3 from '../images/proj-3.jpg'
import proj4 from '../images/proj-4.png'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: `url(${proj1})` }}>
                  <div className="desc">
                    <div className="con">
                      <a href="https://drive.google.com/file/d/1zVcA3jGpiYqrd66fgALwGcGHKU5rOesL/view?usp=sharing">
                        <h3>Kolehiyuh: School Finder</h3>
                        <span>Mobile Application
                          <br />
                          This is an application that aims to help high school graduates in choosing their college schools
                          by providing them a space to browse school admissions and entrance exam applications without the need to visit school websites one by one.
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: `url(${proj2})` }}>
                  <div className="desc">
                    <div className="con">
                      <a href="https://drive.google.com/file/d/1-d4Txk8KSYNdZKG7pnJcP8gVe08pNNZG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <h3>Hidden Rule</h3>
                        <span>Game
                          <br />
                          Hidden Rule is a card game played by a dealer and four players. The game is played with a deck of 13 cards for each player and a deck
                          of 50 rule cards for the dealer. Rule cards determine which cards are allowed to be played during the round. Without the rule card being shown, the other players have to guess the hidden rule during the game.
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: `url(${proj3})` }}>
                  <div className="desc">
                    <div className="con">
                      <a href="https://pupedu-my.sharepoint.com/:v:/g/personal/hgaflores_iskolarngbayan_pup_edu_ph/EZ1IJKzet2BIj0ki1iVVGMQB1uz_-KLBw46go-tE0s6lFw?e=besjX2" target="_blank" rel="noopener noreferrer">
                        <h3>Pawth Finder: An Outdoor LoRa Network Tracking App for Domesticated Dogs</h3>
                        <span>Mobile Application
                          <br />
                          This app was created for a study that aims to develop a LoRa network tracking harness with a corresponding mobile application that can assist non-profit organizations in keeping track of their canines’ whereabouts.
                          </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: `url(${proj4})` }}>
                  <div className="desc">
                    <div className="con">
                      <a href="https://pupedu-my.sharepoint.com/:v:/g/personal/hgaflores_iskolarngbayan_pup_edu_ph/ESKd5wfbNsVKgc6txL-7-w4BKroTuxcMsadm2K_wn1sxSw?e=x24cKz" target="_blank" rel="noopener noreferrer">
                        <h3>Talkitz!: An AAC App for Nonverbal Individuals</h3>
                        <span>Mobile Application
                          <br />
                          This application was designed to serve as a platform for people with speech disabilities such as autism, speech aphasia, apraxia, dysarthria or any disability that prevents a person from communicating verbally. Its goal is to develop a method in assisting nonverbal individuals through assembling comprehensive resources on communication processes. This project will bring together the development of grammar, communication and social skills.
                          </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p className="btn btn-primary btn-lg btn-load-more">More coming soon!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}