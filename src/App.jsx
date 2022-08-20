import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
// service pages
import AddPosts from "./pages/AddPosts/AddPosts";
import * as postsService from "./services/PostsService";
import PostDetails from "./pages/PostDetails/PostDetails";
import ArticlesDetails from "./pages/ArticlesDetails /ArticlesDetails";
import BookHome from "./pages/BookStore/Home/BookHome";
import BookDetails from "./pages/BookStore/BookDetails/BookDetails";
import Profile from "./pages/UserProfile/Profile";
import EditProfile from "./pages/UserProfile/EditProfile";
import Settings from "./pages/UserProfile/Settings";
import AboutUs from "./pages/About/AboutUs/AboutUs";
import ContactUs from "./pages/About/ContactUs/ContactUs";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  // using useEffect to get

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await postsService.getAll();
      setPosts(postData);
    };
    fetchAllPosts();
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const postPhotoHelper = async (photo, id) => {
    const photoData = new FormData();
    photoData.append("photo", photo);
    return await postsService.addPhoto(photoData, id);
  };

  const handleAddPost = async (newPostData, photo) => {
    const newPost = await postsService.create(newPostData);
    // If there is a photo...
    if (photo) {
      newPost.photo = await postPhotoHelper(photo, newPost._id);
    }

    setPosts([...posts, newPostData]);
    navigate("/");
  };

  /////////////Add profile detaills staff //////////////
  const [profileDetails, setprofileDetails] = useState([]);

  const handleAddProfileDetails = (newProfileData) => {
    setprofileDetails([...profileDetails, newProfileData]);
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/add-posts"
          element={<AddPosts handleAddPost={handleAddPost} user={user} />}
        />
        <Route
          path="/home"
          element={<PostDetails posts={posts} user={user} />}
        />
        <Route
          path="/article-details"
          element={<ArticlesDetails user={user} />}
        />
        <Route path="/books" element={<BookHome user={user} />} />
        <Route path="/book-details" element={<BookDetails user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route
          path="/edit-profile"
          element={
            <EditProfile
              handleAddProfileDetails={handleAddProfileDetails}
              user={user}
            />
          }
        />
        <Route path="/profile/settings" element={<Settings user={user} />} />
        <Route path="/about-us" element={<AboutUs user={user} />} />
        <Route path="/contact-us" element={<ContactUs user={user} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
