import React, { useContext } from "react";

import "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";

import { styled } from "@mui/material/styles";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import { SignUpContext } from "../../pages/SignUp";
import PreviewCancelIcon from "../../atoms/icons/PreviewCancelIcon";
import UserFormControl from "../../atoms/forms/UserFormControl";
import UserTextField from "../../atoms/forms/UserTextfield";
import Authttl from "../../atoms/titles/Authttl";
import { prefectures } from "../../../data/prefectures";
import { dayOffs } from "../../../data/dayOffs";
import { fields } from "../../../data/fields";
import { genders } from "../../../data/genders";
import BirthdayForm from "../../atoms/forms/BirthdayForm";
import ChangeAvatar from "../../atoms/avatars/ChangeAvatar";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "80%",
  margin: "0 auto",
  backgroundColor: "#f5f5f5",
}));

const SignUpCard = React.memo(() => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    prefecture,
    setPrefecture,
    gender,
    setGender,
    field,
    setField,
    dayOff,
    setDayOff,
    preview,
    setPreview,
    uploadImage,
    previewImage,
    handleSubmit,
  } = useContext(SignUpContext);

  return (
    <form noValidate autoComplete="off">
      <StyledCard>
        <Authttl title="アカウント作成" />
        <CardContent>
          <ChangeAvatar
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              uploadImage(e);
              previewImage(e);
            }}
            imageUrl=""
            text="プロフィール画像を設定"
          />
          {preview ? (
            <PreviewCancelIcon
              onClick={() => setPreview("")}
              imageUrl={preview}
            />
          ) : null}
          <UserTextField
            label="名前"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <UserTextField
            label="メールアドレス"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <UserTextField
            label="パスワード"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <UserTextField
            label="パスワード（確認用）"
            type="password"
            value={passwordConfirmation}
            autoComplete="current-password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordConfirmation(e.target.value)
            }
          />
          <UserFormControl
            value={`${gender}`}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              setGender(e.target.value as number)
            }
            label="性別"
          >
            {genders.map((gender: string, index: number) => (
              <MenuItem key={index} value={index}>
                {gender}
              </MenuItem>
            ))}
          </UserFormControl>
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
          <BirthdayForm />
          <div style={{ textAlign: "right" }}>
            <SubmitButton
              disabled={
                !name
                  ? // !email ||
                    // !password ||
                    // !passwordConfirmation ||
                    // !gender ||
                    // !prefecture ||
                    // !field ||
                    // !dayOff ||
                    // !birthday
                    true
                  : false
              }
              onClick={handleSubmit}
            >
              始める
            </SubmitButton>
          </div>
        </CardContent>
      </StyledCard>
    </form>
  );
});

export default SignUpCard;
