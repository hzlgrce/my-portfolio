import React, { Component } from 'react'

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
								<div className="project" style={{backgroundImage: 'url(images/proj-1.jpg)'}}>
									<div className="desc">
										<div className="con">
										<a href="https://drive.google.com/file/d/1zVcA3jGpiYqrd66fgALwGcGHKU5rOesL/view?usp=sharing" target="_blank">
											<h3>Kolehiyuh: School Finder</h3>
											<span>Mobile Application
											<br></br>
											This is an application that aims to help high school graduates in choosing their college schools
											by providing them a space to browse school admissions and entrance exam applications without the need to visit school websites one by one.
											</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/proj-2.jpg)'}}>
									<div className="desc">
									<div className="con">
										<a href="https://drive.google.com/file/d/1-d4Txk8KSYNdZKG7pnJcP8gVe08pNNZG/view?usp=sharing" target="_blank">
											<h3>Hidden Rule</h3>
											<span>Game
											<br></br>
											Hidden Rule is a card game played by a dealer and four players. The game is played with a deck of 13 cards for each player and a deck
											of 50 rule cards for the dealer. Rule cards determine which cards are allowed to be played during the round. Without the rule card being shown, the other players have to guess the hidden rule during the game.
											</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Illustration</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
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
