import MainImage from "../../assets/StudyWeekEnd.jpg";
import OnlyImage from "../../assets/StudyOnly.jpg";
import MatchingImage from "../../assets/StudyMatching.jpg";
import ReserchImage from "../../assets/StudyWith.jpg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import StartButton from "../atoms/buttons/StartButton";

const StyledMainContainer = styled("div")(() => ({
  backgroundPosition: "center",
  paddingTop: "1px",
  position: "relative",
  backgroundImage: `url(${MainImage})`,
  backgroundSize: "cover",
  width: "100%",
  height: 800,
  ":before": {
    backgroundColor: "black",
    opacity: "0.4",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  "@media screen and (max-width:600px)": {
    height: 400,
  },
}));

const StyledMainTitle = styled("h1")(() => ({
  fontWeight: "bold",
  marginBottom: 14,
  position: "absolute",
  marginLeft: 20,
  fontSize: 25,
  top: "30%",
  padding: "10px",
  borderRadius: "62px",
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:600px)": {
    top: "20%",
    fontSize: 22,
  },
}));

const StyledQuestionContainer = styled("div")(() => ({
  position: "relative",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  display: "flex",
  backgroundImage: `url(${OnlyImage})`,
  height: 554,
  alignItems: "center",
  justifyContent: "space-around",
  gap: 4,
  flexWrap: "wrap",
  "@media screen and (max-width:600px)": {
    height: 400,
  },
}));

const StyledQuestionTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: -40,
}));

const StyledQuestionTitle = styled("h2")(() => ({
  position: "absolute",
  top: "20%",
  left: "10%",
  fontSize: 30,
  fontWeight: "bold",
  color: "#110",
  "@media screen and (max-width:600px)": {
    fontSize: 27,
  },
}));

const StyledQuestionDescription = styled("p")(() => ({
  fontSize: 20,
  color: "#000",
  position: "absolute",
  left: "10%",
  top: "50%",
  "@media screen and (max-width:600px)": {
    fontSize: 18,
    top: "55%",
    width: "54%",
  },
}));

const StyledResearchContainer = styled("div")(() => ({
  position: "relative",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  display: "flex",
  backgroundImage: `url(${ReserchImage})`,
  height: 554,
  alignItems: "center",
  justifyContent: "space-around",
  gap: 4,
  flexWrap: "wrap",
  "@media screen and (max-width:600px)": {
    height: 400,
  },
}));

const StyledResearchTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: -40,
}));

const StyledResearchText = styled("div")(() => ({
  fontSize: 20,
  position: "absolute",
  left: "10%",
  top: "30%",
  color: "#fff",
  backgroundColor: "rgba(125, 125, 125, 0.7)",
  padding: "1.5rem",
  borderRadius: 50,
  "@media screen and (max-width:600px)": {
    top: "20%",
    left: "5%",
    fontSize: 17,
  },
}));

const StyledResearchMerit = styled("p")(() => ({
  fontSize: 22,
  margin: "0.5rem auto",
  fontWeight: "bold",
  "@media screen and (max-width:600px)": {
    fontSize: 18,
  },
}));

const StyledMatchingContainer = styled("div")(() => ({
  position: "relative",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  display: "flex",
  backgroundImage: `url(${MatchingImage})`,
  height: 554,
  alignItems: "center",
  justifyContent: "space-around",
  gap: 4,
  flexWrap: "wrap",
  backgroundColor: "rgba(255,255,255,0.5)",
  backgroundBlendMode: "lighten",
  "@media screen and (max-width:600px)": {
    height: 400,
  },
}));

const StyledMatchingTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -40,
}));

const StyledMatchingTitle = styled("h1")(() => ({
  fontWeight: "bold",
  marginBottom: 14,
  position: "absolute",
  fontSize: 30,
  top: "30%",
  padding: "10px",
  borderRadius: 62,
  border: "0.5rem solid",
  borderColor: "#333",
  color: "#333",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  "@media screen and (max-width:600px)": {
    fontSize: 26,
    border: "0.4rem solid",
  },
}));

const Top = () => {
  return (
    <>
      <StyledMainContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <StyledMainTitle data-testid="header-title">
            いい出会いで週末の勉強を <br />
            はかどらせよう。
          </StyledMainTitle>
          <StartButton />
        </Box>
      </StyledMainContainer>
      <StyledQuestionContainer>
        <StyledQuestionTextContainer>
          <StyledQuestionTitle>
            仕事がない日も <br />
            勉強に勤しむあなたへ。
          </StyledQuestionTitle>
          <StyledQuestionDescription>
            仕事のため、転職のための勉強、 <br />
            モチベーションが上がらない日がありませんか？
          </StyledQuestionDescription>
        </StyledQuestionTextContainer>
      </StyledQuestionContainer>
      <StyledResearchContainer>
        <StyledResearchTextContainer>
          <StyledResearchText>
            たまに誰かと勉強すると、
            <br />
            <br />
            <StyledResearchMerit>・教えてもらえる</StyledResearchMerit>
            <StyledResearchMerit>
              ・アウトプットの機会が増える
            </StyledResearchMerit>
            <StyledResearchMerit>
              ・モチベーション、集中力が持続しやすい
            </StyledResearchMerit>
            <br />
            といったメリットがあります。
          </StyledResearchText>
        </StyledResearchTextContainer>
      </StyledResearchContainer>
      <StyledMatchingContainer>
        <StyledMatchingTextContainer>
          <StyledMatchingTitle>
            HAKADORIは <br />
            「より知的な出会い」 <br />
            を提供します。
          </StyledMatchingTitle>
        </StyledMatchingTextContainer>
      </StyledMatchingContainer>
    </>
  );
};

export default Top;
