import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import profilePic from './images/default_profile_pic.png';
import AUFC from './images/aufc.png';
import Bio from './images/bio-inf.png';
import NGNL from './images/NGNL.png';
import Blend from './images/blender-logo.png';
import Akatsuki from './images/akatsuki-face.png'
import Hobby from './Components/HobbyPic';
import Descript from './Components/Description';
import Project from './Components/Project';
import RPG from './images/project_photos/RPG-preview.JPG';
import Trivia from './images/project_photos/Trivia-preview.JPG';
import Train from './images/project_photos/train-preview.gif';
import Giphy from './images/project_photos/giphy-preview.JPG';
import Japanese from './images/project_photos/japanese_w.JPG';
import GitLogo from './images/white_git_logo.png';
import LinkedIn from './images/white_linkedin.png';
import Email from './images/white-envelope-png.png';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeHobby: "null",

    };

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseExit = this.handleOnMouseExit.bind(this);
    this.handleScrollTOTop = this.handleScrollToTop.bind(this);
  }

  handleScrollToTop = () => {
    const elmnt = document.getElementById("top");
    elmnt.scrollIntoView();
  }

  handleOnMouseEnter = (newHobby) => {
    this.setState({ activeHobby: newHobby });
    console.log(this.state.activeHobby);
  }
  handleOnMouseExit = () => {
    this.setState({ activeHobby: 'null' });
    console.log(this.state.activeHobby);
  }
  render() {
    return (
      <Container>
        <Navbar header="Brandon Stevenson" id="top" />
        <Container id="about-me" class="row" >
          <div className="col-3 col-sm-4 col-md-3 col-lg-4" />
          <div className="col-6 col-sm-4 col-md-6 col-lg-4">
            <img src={profilePic} id="profile-pic" alt="Brandon Stevenson Profile Pic" />
          </div>
          <div className="col-3 col-sm-4 col-md-3 col-lg-4" />
          <div className="row">

            <p id="pitch-summary" className="col-11 col-sm-8 col-md-10 col-lg-6">
              I'm a fledgling full-stack web developer with plenty still to learn and an ever growing desire to get better at everything I set my sights on.
              I'm an alumni of Georgia Tech's Full-Stack Web Development boot camp. Through the 6 month course I trained in the MERN stack and as an inevitable result my primary skill is with Javascript/Jquery.
              I also became adept with what my instructor liked to call "Google-fu".
              As my knowledge base grows I coninue to be amazed at just how much more there is to learn, and I can't help but feel that I've only seen a piece of the whole pie. As I get more familiar/comfortable with javascript I hope to branch out into languages such as python, Java and C# to broaden my potential.
              My experience working in Data Entry with the logistics industry has strengthened my
              ability to adapt to ever changing work conditions and piece together whole pictures from partial or minimal details quickly and effectively, all while honing
              my ability to balance quality with quantity/speed. That experience I feel has gone a long way towards improving my ability to debug my and my teammates code as we work. I won't go as far as to say I enjoy reading lengthy code documentation but I feel my ability to learn quickly is worth bragging about and i enjoy overcoming a good challenge.
            </p>
          </div>
        </Container>
        <Navbar header="Hobbies" />
        <Container class="hobbies row">
          <Container class="row" id="hobbies-hori">
            <div className="col-lg-1 col-xl-2" />
            <Container class="col-7 col-md-6 col-lg-5 col-xl-4">
              <Hobby src={Akatsuki} class={'horiz other'} topic={'reading'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={AUFC} class={'horiz'} topic={'aufc'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={Bio} class={'horiz'} topic={'game'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={NGNL} class={'horiz'} topic={'anime'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={Blend} class={'horiz'} topic={'blender'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
            </Container>
            <Container class="hobby-cont col-4 col-md-5 col-lg-5 col-xl-3 ">
              <Descript topic={this.state.activeHobby} class={'hobby-des'} />
            </Container>
          </Container>
        </Container>
        <Navbar header="Portfolio" />
        <Container id="portfolio" class="row">
          <Container class="portfolio-buffer col-2 col-md-4 col-lg-1 col-xl-1 " />
          <Project src={RPG} alt="Sensational Smush Sisters" id="rpg-preview" gitLink="https://github.com/Phoenuxx/sensational-smush-sisters" appLink="https://phoenuxx.github.io/sensational-smush-sisters/" />
          <Container class="portfolio-buffer col-2 col-lg-1 col-xl-1" /><Container class="portfolio-buffer col-2 col-lg-1 col-xl-1" />
          <Project src={Trivia} alt="Trivia Game" id="trivia-preview" gitLink="https://github.com/Phoenuxx/TriviaGame" appLink="https://phoenuxx.github.io/TriviaGame/" />
          <Container class="portfolio-buffer col-2 col-lg-3 col-xl-1" /><Container class="portfolio-buffer col-2 col-lg-1  col-xl-1" />
          <Project src={Train} alt="Train Scheduler" id="train-preview" gitLink="https://github.com/Phoenuxx/train-time" appLink="https://phoenuxx.github.io/train-time/" />
          <Container class="portfolio-buffer col-2 col-lg-4 col-xl-2" /><Container class="portfolio-buffer col-2 col-lg-1  col-xl-1" />
          <Project src={Giphy} alt="Giphiphy Generator" id="giphy-preview" gitLink="https://github.com/Phoenuxx/giphiphy-api" appLink="https://phoenuxx.github.io/giphiphy-api" />
          <Container class="portfolio-buffer col-2 col-lg-1 col-xl-1" /><Container class="portfolio-buffer col-2 col-lg-1 col-xl-1" />
          <Project src={Japanese} alt="Japanese Helper" id="japanese-preview" gitLink="https://github.com/Phoenuxx/Kanji-Helper" appLink="https://phoenuxx.github.io/Kanji-Helper/#/" />
        </Container>
        <button onClick={this.handleScrollToTop} id="backToTopBtn">BACK <br /> TO TOP</button>
        <div className="contact-me" id="email"> <a href="mailto:bdstevenson4225@aol.com"><img src={Email} className="git"/></a></div>
        <div className="contact-me" id='git'><a href="https://github.com/Phoenuxx"><img src={GitLogo} className="git"/></a></div>
        <div className="contact-me" id='linkedin'><a href='https://www.linkedin.com/in/brandon-stevenson-b3785817b/'><img src={LinkedIn} className="git"/></a></div>
      </Container>
    );
  }
}

export default App;