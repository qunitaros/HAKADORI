import React, { createContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useHome from "../../lib/hooks/useHome";
import { User } from "../../interfaces";
import CurrentUserCard from "../organisms/cards/CurrentUserCard";
import UserEditDialog from "../organisms/dialogs/UserEditDialog";

export const HomeContext = createContext(
  {} as {
    editFormOpen: boolean;
    setEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    prefecture: number;
    setPrefecture: React.Dispatch<React.SetStateAction<number>>;
    profile: string;
    setProfile: React.Dispatch<React.SetStateAction<string>>;
    field: number;
    setField: React.Dispatch<React.SetStateAction<number>>;
    dayOff: number;
    setDayOff: React.Dispatch<React.SetStateAction<number>>;
    preview: string;
    setPreview: React.Dispatch<React.SetStateAction<string>>;
    uploadImage: any;
    previewImage: any;
    handleSignOut: any;
    currentUserAge: any;
    currentUserPrefecture: any;
    currentUserField: any;
    currentUserDayOff: any;
    currentUser: User;
    handleSubmit: any;
  }
);

const Home: React.FC = () => {
  const {
    isSignedIn,
    editFormOpen,
    setEditFormOpen,
    name,
    setName,
    prefecture,
    setPrefecture,
    profile,
    setProfile,
    field,
    setField,
    dayOff,
    setDayOff,
    preview,
    setPreview,
    uploadImage,
    previewImage,
    currentUserAge,
    currentUserPrefecture,
    currentUserField,
    currentUserDayOff,
    handleSubmit,
    handleSignOut,
    currentUser,
  } = useHome();

  return (
    <HomeContext.Provider
      value={{
        editFormOpen,
        setEditFormOpen,
        name,
        setName,
        prefecture,
        setPrefecture,
        profile,
        setProfile,
        field,
        setField,
        dayOff,
        setDayOff,
        preview,
        setPreview,
        uploadImage,
        previewImage,
        currentUserAge,
        currentUserPrefecture,
        currentUserField,
        currentUserDayOff,
        handleSubmit,
        handleSignOut,
        currentUser,
      }}
    >
      {isSignedIn && currentUser ? (
        <>
          <CurrentUserCard />
          <UserEditDialog />
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </HomeContext.Provider>
  );
};

export default Home;
