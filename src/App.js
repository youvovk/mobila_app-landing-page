import React from 'react';
import './App.scss';
import { Swiper } from "better-react-swiper";

function Slide({ src }) {
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#105783",
      }}

      className="slide"
    >
      <img
        src={src}
        alt="slide"
        style={{ width: "100%", userSelect: "none", pointerEvents: "none" }}
      />
    </div>
  );
}

// function Slide({ src }) {
//   return (
//     <div
//       style={{
//         margin: "0 10px 20px",
//         width: "100%",
//         boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
//         borderRadius: "10px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         color: "#105783"
//       }}
//       className="slide-item"
//     >
//       <img
//         src={src}
//         alt="slide"
//         style={{ width: "100%", userSelect: "none", pointerEvents: "none" }}
//       />
       

//        <div className="slide-item__wrapper" style={{ width: "100%", userSelect: "none", pointerEvents: "none" }}>
//         <div className="slide-item__profile profile">
//             <img src="./images/profile-user.svg" alt="user" />
//             <p className="profile__user">Noah Jackson</p>
//             <img src="./images/twitter-slide.svg" alt="twitter" />
//         </div>
//         <p className="slide-item__text">
//             I use this app every day and it's a great way to keep up to date 
//             with what's going on in football. It's a shame it won't rotate 
//             into landscape mode like its main competitor
//         </p>
//        </div>
//     </div>
//   );
// }

export class App extends React.Component {
  state = {
    slidesWide: 3,
    startedFixed: false,
    time: {
      hours: '00',
      minutes: '0',
    },
    batery: 100,
    volume: false,
  }

  listenOnresizeEvent = e => {
    const clientWidth = document.documentElement.clientWidth;

    if (clientWidth <= 1300 && clientWidth > 900) {
      this.setState({
        slidesWide: 2,
      });
    } else if (clientWidth <= 900) {
      this.setState({
        slidesWide: 1,
      });
    } else {
      this.setState({
        slidesWide: 3,
      });
    }
  }
 
  timerStart = () => {
    let date = new Date();

    date.setTime(Date.now());

    this.setState({
        time: {
            hours: date.getHours(),
            minutes: date.getMinutes(),
        }
    });
  }

  mountBatery = () => {
    if (this.state.batery >= 0) {
      this.setState(({ batery }) => ({batery: batery - 4}))
    }
  };

  toggleVolume = () => this.setState(({ volume }) => ({volume: !volume}));

  componentDidMount() {
    window.addEventListener('resize', this.listenOnresizeEvent);

    this.listenOnresizeEvent();
    this.timerStart();

    let intervalId = setInterval(this.timerStart, 1000);
    let intervakBatery = setInterval(this.mountBatery, 3000);

    this.setState({
      intervalId: intervalId,
      intervakBatery: intervakBatery,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    clearInterval(this.state.intervakBatery);
  }  
  
  render () {
    const { 
      slidesWide, 
      time: {
        hours,
        minutes,
      },
      batery, 
      volume,
    } = this.state; 

    let bateryLowControl = batery <= 0 ? 0 : batery;
    let bateryColor = 'mobile-batery';

    if (bateryLowControl <= 20) {
      bateryColor = 'mobile-batery mobile-batery_red';
    } else if (bateryLowControl <= 50) {
      bateryColor = 'mobile-batery mobile-batery_orange';
    }

    return (
      <>
        <div className="container">
          <header className="header">
            <div className="container-header">
              <div className="header-left">
                <div className="header-left__logo">
                  <a href="#">
                    <img className="header-left__logo-ball" src="./images/football_logo.svg" alt="" />
                  </a>
                </div>
    
                <h1 className="header-left__title">
                  Get a personalized football experience tailored just for you
                </h1>
                <p className="header-left__text">
                  Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.
                </p>
                <div className="link-on-loader link-on-loader__header-mobile">
                  <a 
                    href="https://www.apple.com/retail"
                  >
                    <img
                      className="link-on-loader__apple link-on-loader__apple-mobile"
                      src="./images/Apple Store.svg"
                      alt=""
                    />
                  </a>
                  <a href="https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm
                      _content=071614&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-ua-all-Med-
                      hasem-py-Evergreen-071614-1%7CONSEM_kwid_43700007031591577&gclid=Cj0KCQiAo
                      IPvBRDgARIsAHsCw08YpOCIVUMU8GRrr6Xa_JBdHgtEssWVPqFKVLrJnZpELJydmtyGbdUaAnH
                      3EALw_wcB&gclsrc=aw.ds"
                  >
                    <img src="./images/Google Play.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
    
            <div className="header-right"></div>
          </header>

          <div className="header__side-bar side-bar">
            <div className="header__side-bar-wrapper">
              <h1 className="side-bar__title">GET THE BEST OUT OF YOUR FOOTBALL EXPERIENCE</h1>
              <p className="side-bar__text">Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.</p>
              <button className="side-bar__button">Get the app</button>
            </div>
          </div>
    
          <section className="what-it">
            <div className="what-it__left-wrapper">
              <div className="what-it__left pictures">
                <div className="pictures__picture-first picture-first">
                  <div className="picture-first__left">
                    <div className="picture-first__left-text">
                      <p className="text-day">Sat, 12:35pm</p>
                        <p className="text-teams">
                          Arsenal v <br />
                          Chelsea
                        </p>
                      <p className="text-type">Friendly Match</p>
                    </div>                  

                    <div className="picture-first__right-teams teams">
                      <img className="teams-logo" src="./images/arsenal.svg" alt="" />
                      <img className="teams-logo" src="./images/chelsea.svg" alt="" />
                    </div>
                  </div>
    
                  <div className="notification">
                    <p className="notification-text">Turn on all match notifications</p>

                    <label className="form-switch">
                      <input type="checkbox" className="checkbox" />
                      <i className="checkbox-item" />
                    </label>
                  </div>
                </div>
    
                <iframe 
                  width="360" 
                  height="218" 
                  src="https://www.youtube.com/embed/RhkyXMm9u4Q" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                  className="pictures__picture-second"
                />
              </div>
            </div>
    
            <div className="container-what-it">
              <div className="what-it__right">
                <h3 className="section-title_h3">WHAT IT DOES</h3>
                <h2 className="section-title_h2">An Enhanced Football Experience</h2>
                <p className="section-text">
                  The Guardian Live Scores app is your go to app for
                  live scores and watching Premier League goals… Get
                  in there, what a result!
                </p>
                <br />
                <br />
                <p className="section-text">
                  As well as videos of all the goals, you can watch match highlights,
                  check out the latest scores and results and stay bang-up-to-date with
                  the big football stories from The Guardian publication.
                </p>
    
                <a href="#" className="link">
                  <p className="section-more section-more_what-indent">Learn more</p>
                </a>
              </div>
            </div>
          </section>
    
          <section className="started">
            <div className="container-started">
              <div className="started__left">
                <h3 className="section-title_h3">GET STARTED</h3>
                <h2 className="section-title_h2">User-friendly Interface</h2>
                <p className="section-text">
                  The in-game goal clips from every Premier League match are
                  available to Guardian TV customers with a Guardian subscription.
                </p>
                <br />
                <br />
                <p className="section-text">
                  So, if you’re not a subscriber, now’s the time to make that savvy call.
                  If that’s a step too far for you, you can still watch loads of firecracker
                  Premier League action as long as you sign in with a free Guardian iD.+
                </p>
    
                <a href="#" className="link">
                  <p className="section-more section-more_what-indent">Learn more</p>
                </a>
              </div>
            </div>
            
            <div className="mobile-wrapper">
              <div className="mobile">
                <div className="mobile-wrapper-wrapper__content dropdown">
                  <div className="mobile-wrapper__content dropdown-menu">
                    <header className="mobile__menu-header">
                      <img 
                        src={volume ? './images/mute-on.png' : './images/mute-off.svg'} 
                        alt="volume" 
                        className={volume 
                          ? 'mobile-phone mobile-icon' 
                          : 'mobile-phone mobile-phone_off' 
                        } 
                        onClick={this.toggleVolume} 
                      />
                      <img src="./images/4g.svg" alt="4g internet" className="mobile-icon" />
                      <img src="./images/network.svg" alt="4g internet" className="mobile-icon" />
                      <p className={bateryColor}>{bateryLowControl}%</p>
                      <p className="mobile-time">{minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`}</p>
                    </header>

                    <img src="./images/star.svg" alt="star" className="mobile-star" />

                    <div className="teams-vs">
                      <div className="team-wrapper">
                        <img src="./images/arsenal.svg" alt="" className="team-img" />
                        <p>Arsenal</p>
                        <p className="text-10px">A Gibay(21)</p>
                      </div>
                      
                      <div className="score-wrapper score">
                        <p>1 - 1</p>
                        <p className="score_ft">FT</p>
                      </div>

                      <div className="team-wrapper">
                        <img src="./images/chelsea.svg" alt="" className="team-img" />
                        <p>Chelsea</p>
                        <p className="text-10px">M Salah(45+1)</p>
                      </div>
                    </div>

                    <nav className="dropdown">
                      <ul className="mobile__menu-main">
                        <li className="mobile__menu-item">LINEUPS</li>
                        <li className="mobile__menu-item">COMMENTARY</li>
                        <li className="mobile__menu-item">REPORT</li>
                        <li className="mobile__menu-item">MATCH STATS</li>
                      </ul>
                    </nav>
                    

                    <main className="mobile-main">
                       <h2 className="mobile__main-text">Salah scores  as Liverpool draw</h2>
                       <p className="updates">Last Updates 27/11/19 15:33pm</p>
                       
                    </main>

                    <iframe 
                      width="360" 
                      height="218" 
                      src="https://www.youtube.com/embed/RhkyXMm9u4Q" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen 
                      className="mobile__img"
                    />

                    <main className="mobile-main">
                      <p className="text-12px">
                        The in-game goal clips from every Premier League match are available to 
                        Guardian TV customers with a Guardian subscription.
                      </p>
                      <p className="text-12px">
                        So, if you’re not a subscriber, now’s the time to make that savvy call. 
                        If that’s a step too far for you, you can still watch loads of firecracker 
                        Premier League action as long as you sign in with a free Guardian iD.
                        The Guardian Live Scores app is your go to app for live scores and 
                        watching Premier League goals… Get in there, what a result!
                      </p>
                      <p className="text-12px">
                        As well as videos of all the goals, you can watch match highlights, 
                        check out the latest scores and results and stay bang-up-to-date with 
                        the big football stories from The Guardian publication.
                      </p>
                    </main>
                  </div>
                </div>
              </div>
              <div className="mobile-wrapper-circle__2">
                <div className="mobile-wrapper-circle__2_1" />
              </div>
              <div className="mobile-wrapper-circle__3" />
              <div className="mobile-wrapper-circle__4" />
              <div className="mobile-wrapper-circle__5" />
              <div className="mobile-wrapper-circle__6" />
              <div className="mobile-wrapper-circle__7" />
            </div>
          </section>
    
          <section className="features">
            <h2 className="features-title features-title_black">Features That Will Tailor Your Experience</h2>
    
            <div className="features__columns">
              <div className="features__column">
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/computer.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-ondemand_video-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Video highlights for every Premier League and English Football League game
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/notifications.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-notifications_active-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Notifications for your teams, including in-game goal
                    clips and Premier League match highlights for Sky TV
                    subscribers with Guardian.
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/hd.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-hd-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Brand new video section including
                    dedicated areas for your chosen team,
                    trending video, Premier League,
                    Football league and other major leagues
                  </p>
                </div>
              </div>
              <div className="features__column">
                <div className="column">
                  <img
                    className="features__icon"
                    src=" ./images/flag.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-flag-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Match pages showing live scores,
                    commentary, team line-ups and
                    enhanced match stats to keep you
                    up-to-date on all the action
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/baseline-style-24px.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-style-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    The new picture in picture video
                    mode means you can watch goals,
                    manager interviews and more whilst
                    using other areas of the app –
                    so you don’t need to miss any of the action
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/baseline-poll-24px.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-poll-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Live updated league tables including
                    all the domestic, European and major
                    leagues and tournaments
                  </p>
                </div>
              </div>
              <div className="features__column">
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/baseline-add_to_home_screen-24px.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-add_to_home_screen-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    The Guardian News Vidiprinter.
                    Follow the goals as they go in
                    with our new and improved Vidiprinter
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/baseline-people-24px.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-people-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    Match reports, previews and a
                    dedicated news section
                  </p>
                </div>
                <div className="column">
                  <img
                    className="features__icon"
                    src="./images/baseline-tune-24px.svg"
                    alt=""
                  />
                  <img
                    className="features__icon-mobile"
                    src="./images/baseline-tune-mobile.svg"
                    alt=""
                  />
                  <p className="column_text">
                    <span className="dot_black">
                      •
                    </span>
                    And you can achieve super-fan
                    status by personalising your
                    home page with up-to-the-minute
                    information on your team.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          <section className="slider">
            <div className="containre-slider slider__title">
              <h3 className="section-title_h2">What Our Users Say</h3>
            </div>
    
            <div className="slider__items">
              <Swiper
                infinity={true}
                itemsWide={slidesWide}
                items={[
                  <Slide src="./images/slider-first.svg" />,
                  <Slide src="./images/slider-second.svg" />,
                  <Slide src="./images/slider-third.svg" />,
                  <Slide src="./images/slider-first.svg" />,
                  <Slide src="./images/slider-third.svg" />,
                  <Slide src="./images/slider-second.svg" />,
                  <Slide src="./images/slider-first.svg" />,
                  <Slide src="./images/slider-third.svg" />,
                  <Slide src="./images/slider-first.svg" />,
                  <Slide src="./images/slider-third.svg" />,
                  <Slide src="./images/slider-first.svg" />,
                  <Slide src="./images/slider-third.svg" />,
                ]}
              />
            {/* <Swiper {...params} shouldSwiperUpdate rebuildOnUpdate>
              <div className="wrapper"><img className="items__first-slide" src="./images/slider-first.svg" alt="" /></div>
              <div className="wrapper"><img className="items__second-slide" src="./images/slider-second.svg" alt="" /></div>
            </Swiper> */}
            </div>
    
            <div className="containre-slider slider-pagination_flex">
              {/* <ul className="slider-pagination">
                <li className="slider-pagination__circle slider-pagination_first"></li>
                <li className="slider-pagination__circle slider-pagination_second"></li>
                <li className="slider-pagination__circle slider-pagination_third"></li>
                <li className="slider-pagination__circle slider-pagination_fouth"></li>
                <li className="slider-pagination__circle slider-pagination_fifth"></li>
                <li className="slider-pagination__circle slider-pagination_sixth"></li>
                <li className="slider-pagination__circle slider-pagination_seventh"></li>
              </ul> */}
            </div>
          </section>
    
          <section className="sponsors">
            <h3 className="section-title_h2 sponsors__title">We have been featured in</h3>
    
            <div className="sponsors-logos">
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/sports-tv.svg" alt="" />
              </a>
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/sports.svg" alt="" />
              </a>
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/nbc-sports-1.svg" alt="" />
              </a>
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/designer-news.svg" alt="" />
              </a>
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/designer-technology.svg" alt="" />
              </a>
              <a className="sponsors-logo" href="#">
                <img className="sponsor" src="./images/sky-sports-1.svg" alt="" />
              </a>
            </div>
          </section>
    
          <section className="start-play">
            <div className="start-play__left" />
            <div className="start-play__right">
              <h3 className="section-title_h2 sponsors__title">Get Up Close With Your Team</h3>
              <p className="section-text section-text_start-play">
                If you’re interested in the scores of more than one team (it’s OK, we won’t
                tell your mates you support two clubs!), you can choose the scores and competitions
                that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight
                football fan by downloading the Football Score Centre now. It’s got all this:
              </p>
              <div className="link-on-loader link-on-loader__start-play">
                <a 
                  href="https://www.apple.com/retail"
                >
                  <img
                    className="link-on-loader__apple link-on-loader__apple-mobile"
                    src="./images/Apple Store.svg"
                    alt=""
                  />
                </a>
                <a href="https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm
                    _content=071614&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-ua-all-Med-
                    hasem-py-Evergreen-071614-1%7CONSEM_kwid_43700007031591577&gclid=Cj0KCQiAo
                    IPvBRDgARIsAHsCw08YpOCIVUMU8GRrr6Xa_JBdHgtEssWVPqFKVLrJnZpELJydmtyGbdUaAnH
                    3EALw_wcB&gclsrc=aw.ds"
                  >
                    <img src="./images/Google Play.svg" alt="" />
                  </a>
              </div>
            </div>
          </section>
        </div>
  
        <footer className="footer">
          <a className="footer__logo" href="#">
            <img src="./images/football_logo-footer.svg" alt=""/>
          </a>
  
          <ul className="footer__menu">
            <li className="menu-item">
              <a className="link" href="#">
              Download
            </a>
          </li>
            <li className="menu-item">
              <a className="link" href="#">
              Support
            </a>
          </li>
            <li className="menu-item">
              <a className="link" href="#">
              Developers
            </a>
          </li>
            <li className="menu-item">
              <a className="link" href="#">
              Privacy
            </a>
          </li>
          </ul>
  
          <div className="messengers">
            <a href="https://twitter.com">
              <img src="./images/twitter.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="./images/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com">
              <img src="./images/insta.svg" alt="" />
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
