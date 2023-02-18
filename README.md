## Project Name

The F2E Parallax  
以豐富的互動效果去設計的 F2E 活動網頁

## Technologies

- React
- Prop Types
- Tailwind CSS
- GSAP
- Vite

## Project Screen Shot(s)

https://user-images.githubusercontent.com/103582829/219881455-aeb9787e-0e94-43a7-8e42-ebad1dbe3665.mp4

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

設計稿上有手機版與桌機版的佈局，我反思過應該多花點心思在桌機版上。因為截至今日個人電腦會搭配的螢幕解析度比例越來越有極大的差異性，例如設計師的圖是以 1920x1080 進行的，則我的筆電是 1440x762 的解析度。兩者進行分析 762 height 的螢幕是有可能讓設計稿下方的角色覆蓋到其他元素 (下面有圖片展示可能覆蓋的問題)。

<img width="932" alt="截圖 2023-02-19 上午1 11 52" src="https://user-images.githubusercontent.com/103582829/219879048-f7807ed0-ea1c-4187-af41-2dbeb762352b.png">

這個問題經過研究，我找到 CSS Math Function: `min` & `max` 它如字面上的意思有兩個參數, `min(200px,500px)` => 至少 `200px` 最大上限 `500px`，以這個概念再搭配 `vh` & `vw` 產生下面的程式碼 50.49vh 就是去計算設計稿 1920x1080 的佈局下該元素佔的百分比

```css
height: min(50.49vh,32.3125rem);
```
<img width="898" alt="截圖 2023-02-19 上午1 19 54" src="https://user-images.githubusercontent.com/103582829/219879405-84c2b124-14c6-4f7f-952c-afa35507fc62.png">

有效的解決 1440x762 解析度瀏覽網站的問題，以這個技巧來說也維持住其他不足 1920x1080 解析度的瀏覽體驗。

接下來就是處理隨著使用者往下滾動每個元素要做相對的動畫效果，在這裡使用 GSAP 有兩點原因 1.它是多數公司在處理動畫會選擇的套件 2. 我可能需要點這個技能。但是隨著 Web Animations API 問世搭配 IntersectionObserver，以這個專案的滾動效果可以不去使用 GSAP 就可以處理。

最後網站載入進來的動畫，要解除遮罩是從中心點往外擴散的動畫是使用 clip-path css 屬性，非常滿意這個效果。





