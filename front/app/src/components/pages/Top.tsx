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
}));

const StyledQuestionDescription = styled("p")(() => ({
  fontSize: 20,
  position: "absolute",
  left: "10%",
  top: "50%",
  color: "#110",
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
  backgroundColor: "#444",
  padding: "1.5rem",
  borderRadius: 50,
}));

const StyledResearchMerit = styled("p")(() => ({
  fontSize: 22,
  margin: "0.5rem auto",
  fontWeight: "bold",
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
  backgroundColor: "rgba(255,255,255,0.6)",
  backgroundBlendMode: "lighten",
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
            目標のため、他の人が休んでいる週末も <br />
            勉強しているあなたはすごい人です。 <br />
            <br />
            でも、モチベーションが
            <br />
            上がらない日が続いていませんか？
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
