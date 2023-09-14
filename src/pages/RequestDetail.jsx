import { Profile } from "../components/Profile";
import "./RequestDetail.scss";
import Grid from "../components/Grid";

export default function RequestDetail() {
  return (
    <div>
      <Profile.Wrapper>
        <Profile.Aside
          imgSrc={""}
          igLink={"http://www.naver.com"}
          fbLink={"http://www.google.com"}
        ></Profile.Aside>
        <Profile.Content
          title="My Profile"
          rating={5}
          theme={["테마", "긴 테마"]}
          region="대구광역시 수성구 범어동"
          time="1시간 ~ "
          phone="010-1234-1234"
          price="50,000원"
          description="설명설명설명"
        />
      </Profile.Wrapper>

      <Grid />
    </div>
  );
}
