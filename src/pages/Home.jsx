import React, { useEffect } from "react";
import { Button } from "../components/Button";


import heroImage from "../assets/hero.png";

import "./Home.scss";

export default function Home() {
    return (
        <main className="home-page">
            <section className="hero-section-wrapper">
                <div className="hero-section-container">
                    <div className="hero-section-item">
                        <h2>
                            <span>우리 동네 사진작가 리스트</span>
                        </h2>

                        <h1>
                            <span>당신 근처의</span>
                            <span>사진 작가 리스트</span>
                        </h1>

                        <p>
                            <span>동네라서 가능한 모든 것</span>
                            <span>당근에서 가까운 이웃과 함께해요</span>
                        </p>
                    </div>
                    <div className="hero-section-item">
                        <img src={heroImage} alt="" />
                    </div>
                </div>
            </section>
        </main>
    );

}
