import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//////////////////Components////////////////////////////////////////
import NavBar from "./components/NavBar&Footer/NavBar/NavBar";
import Footer from "./components/NavBar&Footer/Footer/Footer";
//////////////////////////////Pages///////////////////////////////
// Authentication staff
import Signup from "./pages/Authentication/Signup/Signup";
import Login from "./pages/Authentication/Login/Login";
import ChangePassword from "./pages/Authentication/ChangePassword/ChangePassword";

// All members staff
import Members from "./pages/Members/Members";

//post staff
import AddPosts from "./pages/Post/AddPosts/AddPosts";
import PostDetails from "./pages/Post/PostDetails/PostDetails";
import AllPostDetails from "./pages/Post/AllPostDetails/AllPostDetails";

//books staff
import BookHome from "./pages/BookStore/Home/BookHome";
import BookDetails from "./pages/BookStore/BookDetails/BookDetails";

// About staff
import AboutUs from "./pages/About/AboutUs/AboutUs";
import ContactUs from "./pages/About/ContactUs/ContactUs";

// Account staff
import Account from "./pages/Account/Account";

//////////////////////////////services///////////////////////////////
import * as authService from "./services/authService";
import * as postsService from "./services/PostsService";

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

  return (
    <>
      {/* NAVBAR */}
      <NavBar user={user} handleLogout={handleLogout} />
      {/* SIGNUP */}
      <Routes>
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* SIGNIN */}
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* ALL MEMBERS */}
        <Route
          path="/members"
          element={user ? <Members /> : <Navigate to="/login" />}
        />
        {/* CHANGE PASSWORD */}
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
        {/* ADD A POST */}
        <Route
          path="/add-posts"
          element={<AddPosts handleAddPost={handleAddPost} user={user} />}
        />
        {/* DISPLAY POST PREPAGE */}
        <Route path="/" element={<PostDetails posts={posts} user={user} />} />

        {/* DISPLAY POST DETAILS */}
        <Route path="/post">
          <Route path=":id" element={<AllPostDetails user={user} />} />
        </Route>

        <Route path="/books" element={<BookHome user={user} />} />
        <Route path="/book-details" element={<BookDetails user={user} />} />
        <Route path="/about-us" element={<AboutUs user={user} />} />
        <Route path="/contact-us" element={<ContactUs user={user} />} />
        <Route path="/account" element={<Account user={user} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
