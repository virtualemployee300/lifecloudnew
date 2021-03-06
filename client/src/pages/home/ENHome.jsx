import ENTopBar from '../../components/topbar/ENTopBar';
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import mainImage from '../../assets/Rectangle.png';
import { useSearch } from '../../context/SearchContext';
import { Search } from '@material-ui/icons';
import leftCloud from '../../assets/light-blue-left-cloud.png';
import rightCloud from '../../assets/rightCloud.png';
import exampleProfileImage from '../../assets/exampleProfileImage.png';
import { Player } from 'video-react';
import Slider from 'react-slick';
import './home.css';
import Footer from '../../components/footer/Footer';
import ENSocialFooter from '../../components/socialFooter/ENSocialFooter';

const ENHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    lazyLoad: true,
    speed: 750,
    slidesToShow: 1,
    initialSlide: 2,
    fontSize: '1.5em',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    lazyLoad: true,
    speed: 750,
    slidesToShow: 1,
    initialSlide: 2,
    fontSize: '1.5em',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { searchText, setSearchText } = useSearch();
  return (
    <div style={{ cursor: 'default' }}>
      <ENTopBar />
      <div
        className="homeContainer"
        style={{
          backgroundImage: `url(${mainImage})`,
          width: '100%',
          height: '65vh',
          overflow: 'hidden',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'noRepeat',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="home-floating-text">
        <h2>?????????? ?????????? ?????????? ???????????? ??????????</h2>
        <div className="home-profile-creation-btn">???????????? ???????????? ?????? ????????</div>
      </div>
      <div className="search-container">
        <div className="searchbar-container">
          <div className="searchbar searchbar-2">
            <input
              type="text"
              placeholder="?????????? ???? \ ??????????"
              className="SearchInput"
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                height: '95%',
                border: 0,
                direction: 'rtl',
                fontSize: '20px',
              }}
            />
            <Search className="searchIcon" />
          </div>
        </div>
        <Sidebar> </Sidebar>
      </div>

      <div className="vid-text-container">
        <div className="vid-text-title">
          <h1 className="flex-column mb-3">
            <strong>???????????? ???????? ?????????? ??????????, ?????? ?????? ????????????????</strong>
            <span style={{ fontSize: '20px', marginTop: '17px' }}>
              {' '}
              ???????????? ?????????? ???????? -{' '}
            </span>
          </h1>
          <h2 style={{ fontSize: '35px' }}>
            .???? ?????? ?????? ???????? ???????????? ?????????? ???????????? ???????? ?????????? ???????????? ??????
          </h2>
          <h2 style={{ color: '#ABC9DB', fontSize: '30px', marginTop: '1rem' }}>
            MOMENTS. LEGACY. COMMUNITY
          </h2>
        </div>
        <div className="text-section-container">
          <div className="top-image-container">
            <div className="top-image">
              <p className="text-container-home">
                ?????????? ?????????? ???? ???????????? ?????????? ???????????? ?????????????? ???????????? ???? ?????? ????????????,
                ?????????? ????????????. ???????? ???? ???????? ???? ??????????, ???????????????? ???????????? ????????...
              </p>
            </div>
          </div>
          <div className="bottom-image-container" style={{ marginTop: '20px' }}>
            <p
              className="text-container-home"
              style={{ color: '#ffff', fontWeight: '900', fontSize: '50px' }}
            >
              ?????? ???????? ???????? ???? <br></br>???????????? ?????????? ???? ???? ???????{' '}
            </p>
            <Player
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              width="50%"
              height="50%"
              className="react-player"
              controls={true}
            />
            <img
              alt=""
              src={rightCloud}
              style={{ position: 'absolute', right: 0, height: '275px' }}
            ></img>
          </div>
        </div>
      </div>

      <div className="popups-container">
        <h1
          className="text-container-home"
          style={{
            width: '100%',
            textAlign: 'center',
            margin: '1rem',
            fontSize: '40px',
          }}
        >
          ?????? ?????????? ???? ???????? ?????????? ?????????? ??????
          <br></br>{' '}
          <strong style={{ fontSize: '50px' }}>
            ???????? ?????????? ???? ???????????????? ???????????????? ??????????????
          </strong>
        </h1>
      </div>
      <div className="imgs-container">
        <div>
          <div>
            <div className="img-300 thirteen">
              <p className="img-300-text">
                ?????????? ?????????? ?????????? ???????????? ???????????????? ??????????????.
              </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>
              ?????????? ???????????? ??????????????
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="img-300 fourteen">
              <p className="img-300-text">
                ?????? QR ?????????? ?????????? ???????????? ?????????? ????????????, ???????? ???? ???????????????? ????????????
                ???????? ?????????? ???? ??????????{' '}
              </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>{' '}
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>
              ???????????? QR ??????
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="img-300 twelve">
              <p className="img-300-text">
                ???????? ??????, ???????????????? ????????????, ???????? ???????????? ?????????????? ??????????????, ??????????
                ??????????????, ?????????? ??????????, ?????????? ????????????
              </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>{' '}
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>
              ?????????? ???????????? ????????????????
            </h1>
          </div>
          ]
        </div>
      </div>
      <div className="imgs-container">
        <div>
          <div>
            <div className="img-300 sixteen">
              <p className="img-300-text">
                ???????? ???????????? ????????????, ???????? ???????????????? ?????????????? ???? ??????????, ??????????
                ????????????.{' '}
              </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>{' '}
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>
              ?????????? ???????????? ??????????????
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="img-300 seventeen">
              <p className="img-300-text">
                ?????? ?????? ??????????? ???????? ????????????, ?????????? ???????????? ?????????????? ?????????? ??????????????.{' '}
              </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>{' '}
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>
              ?????????? ????????????
            </h1>
          </div>
        </div>
        <div>
          <div>
            <div className="img-300 fifteen">
              <p className="img-300-text">?????????? ???????? </p>
              <div className="read-more-home">
                <span
                  style={{
                    background: '#6097bf',
                    padding: '1rem',
                    borderRadius: '15px',
                  }}
                >
                  <p>+</p>
                  <p>?????? ??????</p>{' '}
                </span>
              </div>
            </div>{' '}
            <h1 style={{ marginTop: '2rem', fontSize: '35px' }}>?????????? ????????</h1>
          </div>
        </div>
      </div>

      <div className="example-profile">
        <Slider {...settings}>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
        </Slider>
      </div>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div">+ ???????????? ?????????????? ????????????</div>
      </a>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div" style={{ backgroundColor: '#6097BF' }}>
          + ?????? ?????? ?????????? ????????????
        </div>
      </a>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div" style={{ backgroundColor: '#46779B' }}>
          + ?????????? ?????????????? ????????????
        </div>
      </a>
      <div className="testimonials">
        <Slider {...testimonialSettings}>
          <div>
            <h3 className="pilKahol">
              "?????????? ?????????? ???????????? ????????????, ?????????????? ???????????????? ???? ?????????? ????????????,
              ???????????? ???????????? ?????????? ?????????????? [???? ??????????]{' '}
            </h3>
            <h5 style={{ marginBottom: '15px' }}>-??????-</h5>
          </div>
          <div>
            <h3 className="pilKahol">
              "?????????? ?????? ?????? ???? ???????? ???????? ?????? ???????? ??????, ?????????? ???? ?????????? ????????"
              ?????????? ??????????
            </h3>
            <h5 style={{ marginBottom: '15px' }}>-?????????? ??????????-</h5>
          </div>
          <div>
            <h3 className="pilKahol">
              "?????????? ?????????? ?????????????? ?????? ?????????????? ?????????? ???? ?????? ??????, ?????????? ??-QR ??????
              ??????????"{' '}
            </h3>
            <h5 style={{ marginBottom: '15px' }}>-???????? ????????-</h5>
          </div>
          <div>
            <h3 className="pilKahol">
              ???????????? ?????? ???????? ?????? ?????? ?????????????? ???????????? ???? ?????? ???????? ????????????????.??
            </h3>
            <h5 style={{ marginBottom: '15px' }}>-??????????-</h5>
          </div>
        </Slider>
        <img
          alt=""
          src={leftCloud}
          style={{ position: 'absolute', left: 0 }}
        ></img>
      </div>
      <ENSocialFooter />
      <Footer />
    </div>
  );
};

export default ENHome;
