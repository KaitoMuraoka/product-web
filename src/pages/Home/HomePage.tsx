import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import hashdPotatoIcon from '../../assets/hashdpotato-icon.png';
import meetCuckooIcon from '../../assets/meetcuckoo-icon.png';

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <h1 className="hero-title">
                    アイデアを形にする、<br />
                    <span className="text-gradient">プロダクト集</span>
                </h1>
                <p className="hero-subtitle">
                    個人で企画・開発した<br />
                    プロダクトを公開しています。
                </p>
            </section>

            <div className="container">
                <div className="app-grid">
                    {/* HashdPotato Card */}
                    <Link to="/hashdpotato" className="app-card hashdpotato-card">
                        <div className="card-content">
                            <div className="app-icon-container">
                                <img src={hashdPotatoIcon} alt="HashdPotato" className="app-icon" />
                            </div>
                            <h2 className="app-title">HashdPotato</h2>
                            <p className="app-description">
                                iOS用ハッシュタグ管理キーボード。<br />
                                SNSでのタグ付けを、かつてないほど簡単に。
                            </p>
                            <span className="learn-more">詳細を見る &rarr;</span>
                        </div>
                    </Link>

                    {/* MeetCuckoo Card */}
                    <Link to="/meetcuckoo" className="app-card meetcuckoo-card">
                        <div className="card-content">
                            <div className="app-icon-container">
                                <img src={meetCuckooIcon} alt="MeetCuckoo" className="app-icon" />
                            </div>
                            <h2 className="app-title">MeetCuckoo</h2>
                            <p className="app-description">
                                Macのメニューバーから次の会議をチェック。<br />
                                スケジュール管理をエレガントに。
                            </p>
                            <span className="learn-more">詳細を見る &rarr;</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
