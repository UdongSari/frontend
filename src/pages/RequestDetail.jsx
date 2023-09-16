import { Profile } from "../components/Profile";
import "./RequestDetail.scss";
import Grid from "../components/Grid";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HOST } from "../utils/host";
import { useCookies } from "react-cookie";

export default function RequestDetail() {
    const { id } = useParams();
    const [cookie] = useCookies(["token"]);

    const [status, setStatus] = useState("fetching");
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${HOST}/api/v1/user/grapher/read/${id}`, {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result);
                setStatus("success");
                setData(result);
            });
    }, []);

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
        {
            imagePath: "이미지 경로 4",
            imageTitle: "제목 4",
            imageDescription: "설명 4",
        },
        {
            imagePath: "이미지 경로 5",
            imageTitle: "제목 5",
            imageDescription: "설명 5",
        },
        {
            imagePath: "이미지 경로 6",
            imageTitle: "제목 6",
            imageDescription: "설명 6",
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
                        igLink={data && data.snsAddress}
                        fbLink={data && data.snsAddress}></Profile.Aside>
                    {data != null && (
                        <Profile.Content
                            title={data.name}
                            rating={data.stars}
                            theme={[data.themas[0].themaName]}
                            region={`${data.regions[0].si} ${data.regions[0].gu}`}
                            time="1시간 ~ "
                            phone={data.phoneNumber}
                            price={data.price}
                            description={data.intro}
                        />
                    )}
                </Profile.Wrapper>
            </motion.div>
            {data != null && <Grid dataItems={data.portfolios} />}
        </div>
    );
}
