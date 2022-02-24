import React, { useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import CommonLayout from "./components/layouts/CommonLayout";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import useCurrentUser from "./lib/hooks/useCurrentUser";

import { User as UserData } from "./interfaces/index";
import NotFound from "./components/pages/NotFound";
import ChatRoom from "./components/pages/ChatRoom";
import ChatRooms from "./components/pages/ChatRooms";
import Users from "./components/pages/Users";
import User from "./components/pages/User";
import Likes from "./components/pages/Likes";
import Posts from "./components/pages/Posts";
import Top from "./components/pages/Top";

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: UserData | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
    handleGetCurrentUser: any;
  }
);

const App: React.FC = React.memo(() => {
  const {
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
    handleGetCurrentUser,
  } = useCurrentUser();

  const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
    if (isSignedIn) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/signin" />; // fromに本来アクセス
    }
  };

  const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
    if (isSignedIn) {
      return <Redirect to="/home" />;
    } else {
      return <Route {...props} />;
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
          handleGetCurrentUser,
        }}
      >
        <Switch>
          <Route exact path="/" component={Top} />
          <CommonLayout>
            {!loading ? (
              <>
                {/* <Route component={NotFound} /> */}
                <UnAuthRoute exact path="/signup" component={SignUp} />
                <UnAuthRoute exact path="/signin" component={SignIn} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/user/:id" component={User} />
                <PrivateRoute exact path="/likes" component={Likes} />
                <PrivateRoute exact path="/chat_rooms" component={ChatRooms} />
                <PrivateRoute path="/chat_room/:id" component={ChatRoom} />
                <PrivateRoute exact path="/posts" component={Posts} />
              </>
            ) : (
              <CircularProgress color="inherit" />
            )}
          </CommonLayout>
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
});

export default App;
