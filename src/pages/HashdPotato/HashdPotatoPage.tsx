import React from 'react';
import { Link } from 'react-router-dom';
import hashdPotatoIcon from '../../assets/hashdpotato-icon.png';
import './HashdPotatoPage.css';

export const HashdPotatoPage: React.FC = () => {
    return (
        <div className="app-detail-page hashdpotato-page">
            <div className="app-hero">
                <div className="container app-hero-content">
                    <img src={hashdPotatoIcon} alt="HashdPotato Icon" className="detail-app-icon" />
                    <h1 className="detail-app-title">HashdPotato</h1>
                    <p className="detail-app-subtitle">iOSのためのスマートなハッシュタグキーボード</p>
                    <div className="app-badges">
                        <span className="badge">iOS 26+</span>
                        <span className="badge">キーボード拡張</span>
                        <span className="badge">プライバシー重視</span>
                    </div>
                </div>
            </div>

            <div className="container app-content">
                <section className="feature-section">
                    <h2>SNS運用を、もっと効率的に。</h2>
                    <p>
                        HashdPotatoは、ハッシュタグ管理を快適にするカスタムキーボードアプリです。
                        いつも使うハッシュタグを、もっと素早く・スマートに。
                        キーボード拡張からワンタップで呼び出して入力できます。
                    </p>
                </section>

                <section className="feature-grid">
                    <div className="feature-card">
                        <h3>ワンタップ入力</h3>
                        <p>複数のハッシュタグを瞬時に挿入。手入力やコピペの手間から解放されます。</p>
                    </div>
                    <div className="feature-card">
                        <h3>カスタムグループ</h3>
                        <p>トピック、気分、プラットフォームごとにタグを整理。状況に合わせてすぐに切り替えられます。</p>
                    </div>
                    <div className="feature-card">
                        <h3>ネイティブな操作感</h3>
                        <p>標準のiOSキーボードと同様のデザインで、違和感なく使用できます。</p>
                    </div>
                </section>

                <section className="setup-guide">
                    <h2>設定方法</h2>
                    <ol className="step-list">
                        <li>App StoreからHashdPotatoをダウンロードしてください。</li>
                        <li><strong>設定</strong>アプリを開き、<strong>一般</strong> &gt; <strong>キーボード</strong>へと進みます。</li>
                        <li><strong>キーボード</strong> &gt; <strong>新しいキーボードを追加...</strong>をタップします。</li>
                        <li>「他社製キーボード」欄から<strong>HashdPotato</strong>を選択してください。</li>
                    </ol>
                </section>

                <div className="privacy-link-container">
                    <Link to="/hashdpotato/privacy" className="privacy-link">プライバシーポリシーを読む</Link>
                </div>
            </div>
        </div>
    );
};
