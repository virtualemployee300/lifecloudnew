import axios from 'axios';
import { useRef, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar';
import SocialFooter from '../../components/socialFooter/socialFooter';
import Footer from '../../components/footer/Footer';
import ENTopbar from '../../components/topbar/ENTopBar';
import ENSocialFooter from '../../components/socialFooter/ENSocialFooter';

export default function ENRegister() {
  const [selectedGender, setSelectedGender] = useState('');
  const firstName = useRef();
  const lastName = useRef();
  const companyName = useRef();
  const dateOfBirth = useRef();
  const gender = selectedGender;
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const [error, setErro] = useState('');
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    password: '',
    passwordAgain: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'va');
    // setSelectedGender(e.target.value);
    setUser({
      ...user,
      [name]: value,
    });
    setErro('');
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (user.password !== user.passwordAgain) {
      setErro("Passwords don't match!");
    } else {
      setErro('');
      try {
        fetch((`${process.env.REACT_APP_API_URL}/api/auth/register`), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            history.push('/login');
            console.log(res, 'res');
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log(user, 'user');
  return (
    <>
      <ENTopbar />
      <div className="register">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="register-logo">Register</h3>
          </div>
          <div className="loginRight">
            <div className="RegBox">
              <form className="loginBox" onSubmit={handleClick}>
                <div className="names-container">
                  <input
                    placeholder="* First name"
                    required
                    onChange={handleChange}
                    ref={firstName}
                    value={user.firstName}
                    name="firstName"
                    className="name-input"
                  />
                  <input
                    placeholder="*Last name"
                    required
                    onChange={handleChange}
                    ref={lastName}
                    value={user.lastName}
                    name="lastName"
                    className="name-input"
                  />
                </div>
                <input
                  placeholder="Company name"
                  onChange={handleChange}
                  ref={companyName}
                  value={user.companyName}
                  name="companyName"
                  className="register-input"
                  type="companyName"
                />
                <input
                  placeholder="Date of birth"
                  onChange={handleChange}
                  ref={dateOfBirth}
                  className="register-input"
                  value={user.dateOfBirth}
                  name="dateOfBirth"
                  type="date"
                />
                <div className="radio-container-register">
                  <h3 style={{ color: '#6097BF' }}>* Gender</h3>
                  <div
                    className={`${
                      selectedGender === 'male' && 'register-active'
                    } radio-input-container-register`}
                    onClick={() => setSelectedGender('male')}
                  >
                    <input
                      type="radio"
                      value="male"
                      id="male"
                      onChange={handleChange}
                      name="gender"
                      checked={user.gender === 'male'}
                      className="radio"
                    />
                    <label for="male">M</label>
                  </div>
                  <div
                    className={`${
                      selectedGender === 'female' && 'register-active'
                    } radio-input-container-register`}
                    onClick={() => setSelectedGender('female')}
                  >
                    <input
                      type="radio"
                      value="female"
                      id="female"
                      onChange={handleChange}
                      checked={user.gender === 'female'}
                      name="gender"
                      className="radio"
                    />
                    <label for="female">F</label>
                  </div>
                </div>
                <input
                  placeholder="*Phone"
                  value={user.phone}
                  name="phone"
                  ref={phone}
                  onChange={handleChange}
                  className="register-input"
                  type="phone"
                />
                <input
                  placeholder="*Email"
                  required
                  value={user.email}
                  name="email"
                  ref={email}
                  onChange={handleChange}
                  className="register-input"
                  type="email"
                />
                <input
                  placeholder="Password*"
                  required
                  value={user.password}
                  name="password"
                  ref={password}
                  className="register-input"
                  onChange={handleChange}
                  type="password"
                  minLength="6"
                />
                <input
                  placeholder="Enter password again*"
                  required
                  value={user.passwordAgain}
                  name="passwordAgain"
                  ref={passwordAgain}
                  onChange={handleChange}
                  className="register-input"
                  type="password"
                />
                <p style={{ color: 'red', textAlign: 'center' }}>
                  {error.length ? error : ''}
                </p>
                <div className="register-actions">
                  <div>
                    <Link
                      to="/login"
                      style={{ textDecoration: 'none' }}
                      className=""
                    >
                      {' '}
                      <span className="">Login </span>
                    </Link>
                    |
                    <Link
                      to="/lostPassword"
                      style={{ textDecoration: 'none' }}
                      className=""
                    >
                      {' '}
                      <span className="">Lost password </span>
                    </Link>
                  </div>
                  <span>I agree to terms and conditions</span>
                </div>
                <button className="register-button" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ENSocialFooter />
      <Footer />
    </>
  );
}
