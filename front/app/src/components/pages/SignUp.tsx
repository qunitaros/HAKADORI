import React, { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Box from "@material-ui/core/Box";
import CancelIcon from "@material-ui/icons/Cancel";

import { AuthContext } from "../../App";
import AlertMessage from "../utils/AlertMessage";
import { signUp } from "../../lib/api/auth";
import { SignUpFormData } from "../../interfaces/index";
import { prefectures } from "../../data/prefectures";
import { genders } from "../../data/genders";
import { fields } from "../../data/fields";
import { dayOffs } from "../../data/dayOffs";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6),
  },
  submitBtn: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
    textTransform: "none",
  },
  header: {
    textAlign: "center",
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 340,
  },
  inputFileButton: {
    textTransform: "none",
    color: theme.palette.secondary.main,
  },
  imageUploadBtn: {
    textAlign: "right",
  },
  input: {
    display: "none",
  },
  box: {
    marginBottom: "1.5rem",
  },
  preview: {
    width: "100%",
  },
}));

// サインアップ用ページ
const SignUp: React.FC = () => {
  const classes = useStyles();
  const histroy = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [gender, setGender] = useState<number>();
  const [prefecture, setPrefecture] = useState<number>();
  const [birthday, setBirthday] = useState<Date | null>(
    new Date("2000^01^01T00:00:00")
  );
  const [field, setField] = useState<number>();
  const [dayOff, setDayOff] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  // アップロードした画像のデータを取得
  const uploadImage = useCallback((e) => {
    const file = e.target.file[0];
    setImage(file);
  }, []);

  // 画像プレビューを表示
  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
  }, []);

  // フォームデータを作成
  const createFormData = (): SignUpFormData => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirmation", passwordConfirmation);
    formData.append("gender", String(gender));
    formData.append("prefecture", String(prefecture));
    formData.append("field", String(field));
    formData.append("dayOff", String(dayOff));
    formData.append("birthday", String(birthday));
    formData.append("image", image);

    return formData;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = createFormData();

    try {
      const res = await signUp(data);
      console.log(res);

      if (res.status === 200) {
        // アカウント作成と同時にサインインさせてしまう
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        histroy.push("/home");

        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setGender(undefined);
        setPrefecture(undefined);
        setBirthday(null);
        setField(undefined);
        setDayOff(undefined);

        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="アカウント作成" />
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="名前"
              value={name}
              margin="dense"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="メールアドレス"
              value={email}
              margin="dense"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード"
              type="password"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード（確認用）"
              type="password"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirmation(e.target.value)
              }
            />
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                性別
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gender}
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
              </Select>
            </FormControl>
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                都道府県
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={prefecture}
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
              </Select>
            </FormControl>
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                勉強している分野
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={field}
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
              </Select>
            </FormControl>
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                休日
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={dayOff}
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
              </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  fullWidth
                  inputVariant="outlined"
                  margin="dense"
                  id="date-picker-dialog"
                  label="誕生日"
                  format="MM/dd/yyyy"
                  value={birthday}
                  onChange={(date: Date | null) => setBirthday(date)}
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <div className={classes.imageUploadBtn}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  uploadImage(e);
                  previewImage(e);
                }}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
            {preview ? (
              <Box className={classes.box}>
                <IconButton color="inherit" onClick={() => setPreview("")}>
                  <CancelIcon />
                </IconButton>
                <img
                  src={preview}
                  alt="preview img"
                  className={classes.preview}
                />
              </Box>
            ) : null}
            <div style={{ textAlign: "right" }}>
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disabled={
                  !name || !email || !password || !passwordConfirmation
                    ? true
                    : false
                } // 空欄があればボタンを押させないように
                onClick={handleSubmit}
              >
                始める
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="メールアドレスかパスワードが間違っています"
      />
    </>
  );
};

export default SignUp;
