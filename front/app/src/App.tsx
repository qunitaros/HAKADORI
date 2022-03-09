import React, { useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

interface RouteProps {
  children: React.ReactNode;
}

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

  const Private = ({ children }: RouteProps) => {
    return isSignedIn ? <>{children}</> : <Redirect to="/" />;
  };

  const UnAuth = ({ children }: RouteProps) => {
    return isSignedIn ? <Redirect to="/home" /> : <>{children}</>;
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
          {!loading ? (
            <>
              <UnAuth>
                <CommonLayout>
                  <Switch>
                    <Route exact path="/" component={Top} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                  </Switch>
                </CommonLayout>
              </UnAuth>
              <Private>
                <CommonLayout>
                  <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/user/:id" component={User} />
                    <Route exact path="/likes" component={Likes} />
                    <Route exact path="/chat_rooms" component={ChatRooms} />
                    <Route path="/chat_room/:id" component={ChatRoom} />
                    <Route exact path="/posts" component={Posts} />
                    <Route component={NotFound} />
                  </Switch>
                </CommonLayout>
              </Private>
            </>
          ) : (
            <CommonLayout>
              <CircularProgress color="inherit" />
            </CommonLayout>
          )}
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
});

export default App;
