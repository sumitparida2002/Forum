import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import CreatePost from "./pages/CreatePost";

import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="456076148562-uot2b1vituaukqqucng3undebsuv9ddf.apps.googleusercontent.com">
      <Navbar />
      <Content />
      {/* <CreatePost /> */}
    </GoogleOAuthProvider>
  );
};

export default App;
