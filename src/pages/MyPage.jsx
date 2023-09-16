import { Profile } from "../components/Profile";
import Grid from "../components/Grid";
import { motion } from "framer-motion";

import "./MyPage.scss";

export default function MyPage() {
    const dataItems = [
        {
            imagePath: "이미지 경로 1",
            imageTitle: "제목 1",
            imageDescription: "설명 1",
        },
        {
            imagePath: "이미지 경로 2",
            imageTitle: "제목 2",
            imageDescription: "설명 2",
        },
        {
            imagePath: "이미지 경로 3",
            imageTitle: "제목 3",
            imageDescription: "설명 3",
        },
        // 나머지 데이터 아이템들도 추가하세요.
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }} // 초기 상태 설정
                animate={{ opacity: 1, y: 0 }} // 애니메이션 종료 후의 상태 설정
                exit={{ opacity: 0, y: -100 }} // 컴포넌트 제거 시 상태 설정
                transition={{ duration: 1 }} // 애니메이션 지속 시간 설정
                className="slideDown" // 애니메이션 클래스를 추가합니다.
                style={{ width: "100%", position: "relative", top: 0 }}>
                <Profile.Wrapper>
                    <Profile.Aside
                        imgSrc={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"}
                        igLink={"http://www.naver.com"}
                        fbLink={"http://www.google.com"}></Profile.Aside>
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
            <Grid dataItems={dataItems} />
        </div>
    );
}
