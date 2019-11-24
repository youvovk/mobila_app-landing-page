import React from 'react';
import './App.scss';

function App() {
  return (
    <>
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
              <a href="#">
                <img
                  className="link-on-loader__apple link-on-loader__apple-mobile"
                  src="./images/Apple Store.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img src="./images/Google Play.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="header-right"></div>
      </header>

      <section className="what-it">
        <div className="what-it__left-wrapper">
          <div className="what-it__left pictures">
            <div className="pictures__picture-first picture-first">
              <div className="picture-first__left">
                <p>Sat, 12:35pm</p>
                <p>
                  Arsenal v
                  Chelsea
                </p>
                <p>Friendly Match</p>
              </div>
              <div className="picture-first__right">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>

              <div className="">
                <p>Turn on all match notifications</p>

              </div>
            </div>

            <div className="pictures__picture-second" />
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

        <div className="started__right-mobile-wrapper" />
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
          <button className="slider-button__left">
            <img src="./images/slider-button-left.svg" alt="" />
          </button>
          <button className="slider-button__right">
            <img src="./images/slider-button-right.svg" alt="" />
          </button>
          <img className="items__side-slide" src="./images/slider-left.svg" alt="" />
          <img className="items__first-slide" src="./images/slider-first.svg" alt="" />
          <img className="items__second-slide" src="./images/slider-second.svg" alt="" />
          <div className="items__seond-slide_wrapper">
            <img src="./images/slider-third.svg" alt="" />
            <button className="slider-button__right-mobile">
              <img src="./images/slider-button-right.svg" alt="" />
            </button>
          </div>
          <img className="items__side-slide" src="./images/slider-right.svg" alt="" />
        </div>

        <div className="containre-slider slider-pagination_flex">
          <ul className="slider-pagination">
            <li className="slider-pagination__circle slider-pagination_first"></li>
            <li className="slider-pagination__circle slider-pagination_second"></li>
            <li className="slider-pagination__circle slider-pagination_third"></li>
            <li className="slider-pagination__circle slider-pagination_fouth"></li>
            <li className="slider-pagination__circle slider-pagination_fifth"></li>
            <li className="slider-pagination__circle slider-pagination_sixth"></li>
            <li className="slider-pagination__circle slider-pagination_seventh"></li>
          </ul>
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
            <a href="#">
              <img className="link-on-loader__apple" src="./images/Apple Store.svg" alt="" />
            </a>
            <a href="#">
              <img src="./images/Google Play.svg" alt="" />
            </a>
          </div>
        </div>
      </section>

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
          <a href="#">
            <img src="./images/twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="./images/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./images/insta.svg" alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
