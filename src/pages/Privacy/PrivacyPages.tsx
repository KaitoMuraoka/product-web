import React from 'react';
import './PrivacyPage.css';

export const HashdPotatoPrivacyPage: React.FC = () => {
    return (
        <div className="privacy-page container">
            <h1>HashdPotato プライバシーポリシー</h1>
            <p className="last-updated">最終更新日: {new Date().toLocaleDateString()}</p>

            <div className="privacy-content">
                <section>
                    <h2>はじめに</h2>
                    <p>
                        HashdPotato（以下「私たち」）は、ユーザーのプライバシーを尊重しています。
                        本ポリシーでは、当キーボード拡張機能を使用する際のデータの取り扱いについて説明します。
                    </p>
                </section>

                <section>
                    <h2>収集するデータ</h2>
                    <p>
                        私たちは、HashdPotatoキーボードを使用して入力された個人情報、キーストローク、その他のデータを<strong>収集、保存、送信することはありません</strong>。
                        すべてのハッシュタグデータは、お使いのデバイス内にローカルに保存されます。
                    </p>
                </section>

                <section>
                    <h2>フルアクセスについて</h2>
                    <p>
                        iOSは、キーボードのクリック音の再生や触覚フィードバック（Haptics）などの機能を利用するために、「フルアクセス」の許可を求める場合があります。
                        フルアクセスを許可した場合でも、私たちが外部サーバーにデータを送信することはありませんのでご安心ください。
                    </p>
                </section>

                <section>
                    <h2>お問い合わせ</h2>
                    <p>本プライバシーポリシーに関するご質問は、サポートまでお問い合わせください。</p>
                </section>
            </div>
        </div>
    );
};

export const MeetCuckooPrivacyPage: React.FC = () => {
    return (
        <div className="privacy-page container">
            <h1>MeetCuckoo プライバシーポリシー</h1>
            <p className="last-updated">最終更新日: {new Date().toLocaleDateString()}</p>

            <div className="privacy-content">
                <section>
                    <h2>はじめに</h2>
                    <p>
                        MeetCuckoo（以下「私たち」）は、あなたのミーティング管理を支援するアプリです。
                        本ポリシーでは、データの取り扱いについて説明します。
                    </p>
                </section>

                <section>
                    <h2>カレンダーへのアクセス</h2>
                    <p>
                        MeetCuckooは、予定されているミーティングを表示するために、Macのカレンダーへのアクセスを必要とします。
                        このデータはMac上でローカルに処理され、私たちのサーバーへ送信されることは<strong>一切ありません</strong>。
                    </p>
                </section>

                <section>
                    <h2>データの保存</h2>
                    <p>
                        カレンダーのイベントや個人情報を外部サーバーに保存することはありません。
                    </p>
                </section>

                <section>
                    <h2>お問い合わせ</h2>
                    <p>ご質問がございましたら、サポートチームまでご連絡ください。</p>
                </section>
            </div>
        </div>
    );
};
