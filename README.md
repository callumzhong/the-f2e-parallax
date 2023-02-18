## Project Name

The F2E Parallax  
用於介紹互動設計活動的 F2E 網頁 

## Technologies

- React
- Prop Types
- Tailwind CSS
- GSAP
- Vite

## Project Screen Shot(s)


![Screenshot 2023-02-19 at 00-26-42 互動式網頁設計 - https __the-f2e-parallax vercel app_](https://user-images.githubusercontent.com/103582829/219876871-11b67992-5b6c-4c87-a631-f1b44d2d95d1.png)
![Screenshot 2023-02-19 at 00-26-14 互動式網頁設計 - https __the-f2e-parallax vercel app_](https://user-images.githubusercontent.com/103582829/219876874-0e92bd52-4298-4c00-8775-cb7b7e6ccf0e.png)

## Installation and Setup Instructions

下載專案前，請先安裝 `node` 與 `yarn`

```
git clone https://github.com/callumzhong/the-f2e-parallax.git
```

安裝:

`yarn install`

啟動伺服器:

`yarn dev`

訪問應用程式:

`localhost:5173`

## Reflection

這是以互動設計為要點的網站設計，以活動內容來說有三個組別分別是工程師、設計師、團隊。設計師以卡通角色模擬他們互相在跑道上競爭的動態效果。

設計稿上有手機版與桌機版的佈局，我反思過應該多花點心思在桌機版上。因為截至今日個人電腦裝置有太多種所配置的螢幕解析度比例越來越有極大的差異性，例如設計師的圖是以 1920x1080 進行的，則我的筆電 1440x762 的解析度
這是我第一個有關 3D 模型的專案，需要涵蓋所學的技術如模型載入、燈光、陰影、鏡頭轉向位移，另外 Blender 3D電腦圖形軟體的運用也是其重點，最初的構想是使用者以環繞的方式瀏覽3D民宿的外觀，透過導覽列連結可以查看房型介紹頁面。決定完後我以 `vite` 構建 `react-ts` 模板並安裝相關的套件後進行 10 天的開發旅程。

很快的我迎上第一個挑戰3D民宿怎麼做？怎麼處理？ 我找尋許久後找到 sketchfab.com 網站有提供授權的民宿模型，與下載 Blender 軟體後花了幾天研究模型編輯、React Three Fiber 套件。不幸的是它不斷地消耗我的時程，我只能減少房型介紹頁的數量取消雙人房、豪華雙人房、雙床房、豪華雙床房及訂房機制，這些屬於其他專案已實現過的功能。

後端則是串接 Firebase，透過 React Query Firebase 實作此功能後順利串接完介紹頁面，整體來說這項專案核心透過 React Three Fiber 載入 GlB 模型渲染，以 A / B 鏡頭移動瀏覽前院及後院的佈置，在下一次疊代我計畫需求是更大量的使用3D技術，互動式的瀏覽房型介紹讓鏡頭走進民宿內的佈置。




