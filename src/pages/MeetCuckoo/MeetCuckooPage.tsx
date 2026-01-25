import React from 'react';
import { Link } from 'react-router-dom';
import meetCuckooIcon from '../../assets/meetcuckoo-icon.png';
import appStoreBadege from '../../assets/Download_on_the_App_Store_Badge.svg';
import './MeetCuckooPage.css';

export const MeetCuckooPage: React.FC = () => {
    return (
        <div className="app-detail-page meetcuckoo-page">
            <div className="app-hero">
                <div className="container app-hero-content">
                    <img src={meetCuckooIcon} alt="MeetCuckoo Icon" className="detail-app-icon" />
                    <h1 className="detail-app-title">MeetCuckoo</h1>
                    <p className="detail-app-subtitle">次のミーティングまで、あと何分？</p>
                    <div className="app-badges">
                        <span className="badge">macOS Tahoe+</span>
                        <span className="badge">メニューバーアプリ</span>
                        <span className="badge">効率化</span>
                    </div>
                </div>
            </div>

            <div className="container app-content">
                <section className="feature-section">
                    <h2>時間を把握し、集中を持続する。</h2>
                    <p>
                        MeetCuckooはメニューバーに常駐し、次の会議までの残り時間を表示します。
                        ひと目で予定を把握し、ワンクリックで会議に参加できます。
                    </p>
                </section>

                <section className="feature-grid">
                    <div className="feature-card">
                        <h3>カウントダウンタイマー</h3>
                        <p>メニューバーに残り時間を表示。作業を邪魔することなく、会議の時間をお知らせします。</p>
                    </div>
                    <div className="feature-card">
                        <h3>ワンクリック参加</h3>
                        <p>Zoom, Google Meet, Teamsなどの会議リンクを自動検出し、すぐに参加できます。</p>
                    </div>
                    <div className="feature-card">
                        <h3>スマート通知</h3>
                        <p>会議開始前に大きく通知。うっかり遅れることを防ぎます。</p>
                    </div>
                </section>

                <section className="setup-guide">
                    <h2>インストール方法</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        MeetCuckooはmacOSで利用可能です。AppStoreでインストール後、カレンダーと同期して、次の会議を表示します。
                    </p>
                </section>

                {/* <section className="download-section">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img className='download-section' src={appStoreBadege} alt="App Store Download Badge" />
                    </a>
                </section> */}

                <div className="privacy-link-container">
                    <Link to="/meetcuckoo/privacy" className="privacy-link">プライバシーポリシーを読む</Link>
                </div>
            </div>
        </div>
    );
};
