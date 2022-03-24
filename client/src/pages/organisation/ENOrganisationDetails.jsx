import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import waze from '../../assets/waze.png';
import zoom from '../../assets/zoom.png';
import google from '../../assets/google.png';
import heart from '../../assets/heart.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import { Link } from 'react-router-dom';
import './organisation-details.css';
import ProgressBar from '../../components/progressbar/progressBar';
import { ENGallery } from '../../components/gallery/ENGallery';
// import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router';
import ENMemory from '../../components/memory/Memory';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router';
import SnackBar from '../../components/snackbar/SnackBar';
import ENSocialFooter from '../../components/socialFooter/ENSocialFooter';
import ENFriendsList from '../../components/friendsList/ENFriendsList';
import Footer from '../../components/footer/Footer';
import ENTopbar from '../../components/topbar/ENTopBar';

// import { useParams } from 'react-router-dom';
export default function ENProfile() {
  const { dispatch } = useContext(AuthContext);
  const [profiledata, setProfileData] = useState([]);
  const [memoryData, setmemoryData] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [text, setText] = useState({ comments: [{ text: '' }] });
  const [show, setShow] = useState('wall');
  const history = useHistory();
  const [likeMessage, setLikeMessage] = useState('');
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState();
  const [DellComment, setDelComment] = useState('');
  const [friendFlagReq, setrfriendReq] = useState([]);
  const [adminFlagReq, setAdminres] = useState([]);
  const id = useParams().id;
  const [memories, setMemories] = useState([]);
  const [next, setnext] = useState(1);
  const handleShowMoreMemories = () => {
    setnext(next + 4);
  };
  console.log(id);
  useEffect(() => {
    setCommenting('');
    setComment('');
    setLikeMessage('');
  }, [likeMessage, comment, DellComment, friendFlagReq, adminFlagReq]);
  useEffect(() => {
    fetchuserprofiles();
  }, []);
  useEffect(() => {
    if (Object.keys(profiledata).length > 0) {
      fetchmemories();
    }
  });
  const fetchuserprofiles = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/profile/getSingleProfileDetails/${id}`
    );
    setProfileData(res.data);
    console.log(res, 'res');
  };

  const fetchmemories = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/memory/getallmemory/${id}`
    );
    console.log(res, 'res memory');
    setmemoryData(res.data);
  };

  console.log(memoryData, 'get all memory');
  console.log(profiledata);
  let pasrseAxios = Object.keys(profiledata).length
    ? JSON.parse(profiledata.lifeAxis)
    : '';
  console.log(pasrseAxios);
  console.log();
  const handleLike = (e) => {
    try {
      const formdata = new FormData();
      let data = {
        userId: profiledata.originalUser[0]._id,
      };
      fetch(`${process.env.REACT_APP_API_URL}/api/memory/like/${e._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);

          if (res) {
            setLikeMessage(res);
            // setMessage('like added successfully!')
            // setOpen(true)
          }
        });
    } catch (err) {
      console.log(err);
      setMessage('Something went wrong!');
      setOpen(true);
    }
  };

  //
  const handleComment = (e) => {
    console.log(e);
    try {
      fetch(`${process.env.REACT_APP_API_URL}/api/memory/comment/${e._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(text),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);

          if (res) {
            setCommenting(false);
            setComment(res);
            // setMessage('like added successfully!')
            // setOpen(true)
          }
        });
    } catch (err) {
      console.log(err);
      setMessage('Something went wrong!');
      setOpen(true);
    }
  };

  //

  const onhandleChangeComment = (e) => {
    setText({
      comments: [
        {
          text: e.target.value,
        },
      ],
    });
  };

  const handleDelete = (e, id) => {
    console.log(e, id);
    fetch(`${process.env.REACT_APP_API_URL}/api/memory/commentdell/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ comment: e }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setDelComment(res);
        if (res) {
          setCommenting(false);
          setComment(res);
          // setMessage('like added successfully!')
          // setOpen(true)
        }
      });
  };
  const handleDellMemory = (e) => {
    console.log(e, 'e');
    fetch(`${process.env.REACT_APP_API_URL}/api/memory/commentdellOBJ/${e._id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setDelComment(res);
        if (res) {
          setCommenting(false);
          setComment(res);
          history.push(`/userprofiles/${profiledata.originalUser[0]._id}`);
          setMessage('delete successfully!');
          // setOpen(true)
        }
      });
  };
  const handleClose = () => {
    setOpen(false);
    setMessage('');
  };
  console.log(memoryData, 'memoryData');
  var options = {
    weekday: 'long', //to display the full name of the day, you can use short to indicate an abbreviation of the day
    day: 'numeric',
    month: 'long', //to display the full name of the month
    year: 'numeric',
  };
  console.log(text, 'setText');
  // const {file} = memoryData
  if (Object.keys(profiledata).length > 0) {
    return (
      <div>
        <ENTopbar />
        <img
          src={`${process.env.REACT_APP_API_URL}/${profiledata.wallImg}`}
          alt=""
          className="profile-cover"
        ></img>
        <div className="profile-details">
          <img
            src={`${process.env.REACT_APP_API_URL}/${profiledata.profileImg}`}
            alt=""
            className="profile-img"
          ></img>
          <div className="deceased-details">
            <h1>{`${profiledata.firstName} ${profiledata.lastName}`}</h1>
            <p>
              {profiledata.birthDate.split('T')[0]} -{' '}
              {profiledata.deathDate.split('T')[0]}
            </p>
            {/* <p>{profile[0].city}</p> */}
          </div>
        </div>
        <div className="btns-container">
          <div>
            <Link to={`/editprofiles/${id}`}>
              <span className="small-btn">Edit profile</span>
            </Link>
            <span className="small-btn">Add friend</span>
            <span className="small-btn" onClick={() => setShow('friends')}>
              Friends list
            </span>
          </div>
          <div className="big-btns-container">
            <div
              onClick={() => setShow('wall')}
              className={`${show === 'wall' && 'active'} big-btn`}
            >
              Wall
            </div>
          </div>
        </div>
        <div
          className={`${
            show === 'wall' && 'display'
          } d-none wall-main-container`}
        >
          <div className="memorial-container">
            <h1 className="memorial-title">Memorial date</h1>
            <div className="details-and-icons">
              <div className="memorial-details">
                <h3>| {profiledata.birthDate.split('T')[0]}</h3>
                <h3>| {profiledata.deathDate.split('T')[0]}</h3>
                <h3>| {profiledata.wazeLocation}</h3>
              </div>
            </div>
          </div>
          <div>
            <h1>About the organisation</h1>
            <p>{profiledata.description}</p>
          </div>
          <div className="gallery-container">
            <ENGallery profiledata={profiledata} id={id} />
            <div onClick={() => setShow('gallery')} className="full-btn">
              {' '}
              + Full gallery
            </div>
          </div>
          <div className="grave-location-container">
            <h1 className="grave-location-title">Graves location</h1>
            <div className="grave-imgs-container">
              <img
                src={profiledata.graveImage}
                alt=""
                className="grave-img"
              ></img>
            </div>
            <div className="navigation-btn">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${profiledata.googleLocation}`}
              ></a>
              לחץ כאן כדי לנווט לקבר <img src={google} alt=""></img>
            </div>
          </div>
          {/* here will be the list of deceased */}
        </div>
        <div
          className={`${show === 'gallery' && 'display'} full-gallery d-none`}
        >
          <div className="full-gallery-container">
            {profiledata.gallery.map((img, index) => (
              <div className="full-gallery-img-container" key={index}>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${img}`}
                  alt=""
                  className="full-gallery-img"
                ></img>
                <div className="heart-container">
                  <div className="heart-div">
                    <img className="heart-icon" src={heart} alt=""></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${show === 'friends' && 'display'} friends-list d-none`}
        >
          <ENFriendsList
            proid={id}
            profiledata={profiledata}
            setAdminres={setAdminres}
            setrfriendReq={setrfriendReq}
          />
        </div>
        <SnackBar open={open} handleClose={handleClose} message={message} />
        <ENSocialFooter />
        <Footer />
      </div>
    );
  } else {
    return (
      <h1 style={{ textAlign: 'center', paddingTop: '20%' }}>
        <ProgressBar />
      </h1>
    );
  }
}
