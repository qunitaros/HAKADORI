import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";

import Dialogttl from "../../atoms/titles/Dialogttl";
import UserTextField from "../../atoms/forms/UserTextfield";
import { HomeContext } from "../../pages/Home";
import UserFormControl from "../../atoms/forms/UserFormControl";
import { prefectures } from "../../../data/prefectures";
import { fields } from "../../../data/fields";
import { dayOffs } from "../../../data/dayOffs";
import PhotoCameraIcon from "../../atoms/icons/PhotoCameraIcon";
import PreviewCancelIcon from "../../atoms/icons/PreviewCancelIcon";
import SubmitButton from "../../atoms/buttons/SubmitButton";

const UserEditDialog = React.memo(() => {
  const {
    name,
    setName,
    prefecture,
    setPrefecture,
    field,
    setField,
    dayOff,
    setDayOff,
    profile,
    setProfile,
    preview,
    setPreview,
    editFormOpen,
    setEditFormOpen,
    uploadImage,
    previewImage,
    handleSubmit,
  } = useContext(HomeContext);

  return (
    <form noValidate autoComplete="off">
      <Dialog
        open={editFormOpen}
        keepMounted
        onClose={() => setEditFormOpen(false)}
      >
        <Dialogttl>プロフィールの編集</Dialogttl>
        <DialogContent>
          <UserTextField
            label="名前"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <UserFormControl
            value={`${prefecture}`}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setPrefecture(e.target.value as number)
            }
            label="都道府県"
          >
            {prefectures.map((prefecture: string, index: number) => (
              <MenuItem key={index + 1} value={index + 1}>
                {prefecture}
              </MenuItem>
            ))}
          </UserFormControl>
          <UserFormControl
            value={`${field}`}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setField(e.target.value as number)
            }
            label="勉強している分野"
          >
            {fields.map((field: string, index: number) => (
              <MenuItem key={index} value={index}>
                {field}
              </MenuItem>
            ))}
          </UserFormControl>

          <UserFormControl
            value={`${dayOff}`}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setDayOff(e.target.value as number)
            }
            label="休日"
          >
            {dayOffs.map((dayOff: string, index: number) => (
              <MenuItem key={index} value={index}>
                {dayOff}
              </MenuItem>
            ))}
          </UserFormControl>
          <UserTextField
            label="自己紹介"
            value={profile}
            placeholder="1000文字以内で書いてください"
            rows="8"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProfile(e.target.value)
            }
          />
          <PhotoCameraIcon
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              uploadImage(e);
              previewImage(e);
            }}
          />
          {preview ? (
            <PreviewCancelIcon
              onClick={() => setPreview("")}
              imageUrl={preview}
            />
          ) : null}
          <DialogActions>
            <SubmitButton
              onClick={handleSubmit}
              disabled={
                !name || !prefecture || !field || !dayOff || !profile
                  ? true
                  : false
              }
            >
              変更する
            </SubmitButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </form>
  );
});

export default UserEditDialog;
