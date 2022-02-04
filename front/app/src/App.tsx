import React, { useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import Root from "./components/pages/Root";
import User from "./components/pages/User";
import Likes from "./components/pages/Likes";
import Posts from "./components/pages/Posts";

// グローバルで扱う変数・関数
export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: UserData | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
  }
);

const App: React.FC = () => {
  const {
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
    handleGetCurrentUser,
  } = useCurrentUser();

  useEffect(() => {
    handleGetCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ユーザーが認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/signin」ページに促す
  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Redirect to="/signin" />;
      }
    } else {
      return <></>;
    }
  };

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
        }}
      >
        <Switch>
          <Route exact path="/" component={Root} />
          <CommonLayout>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Private>
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
            </Private>
          </CommonLayout>
        </Switch>

        {/* </PostContext.Provider> */}
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
