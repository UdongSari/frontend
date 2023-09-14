import { Profile } from "../components/Profile";
import "./RequestDetail.scss";
import Grid from "../components/Grid";
import { motion } from "framer-motion";

export default function RequestDetail() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }} // 초기 상태 설정
        animate={{ opacity: 1, y: 0 }} // 애니메이션 종료 후의 상태 설정
        exit={{ opacity: 0, y: -100 }} // 컴포넌트 제거 시 상태 설정
        transition={{ duration: 1 }} // 애니메이션 지속 시간 설정
        className="slideDown" // 애니메이션 클래스를 추가합니다.
        style={{ width: "100%", position: "relative", top: 0 }}
      >
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
      </motion.div>
      <Grid />
    </div>
  );
}
