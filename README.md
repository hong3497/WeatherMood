# 🌤️ WeatherMood

**WeatherMood**는 사용자의 현재 날씨 정보를 기반으로 감성적인 콘텐츠를 추천해주는 반응형 웹 애플리케이션입니다.  
실시간 날씨를 조회하고, 날씨에 어울리는 음악과 이모지, 문구 등을 제공하여 오늘의 분위기를 즐길 수 있도록 돕습니다.

> “당신의 날씨에 감성을 더해보세요.”

---

## 🚀 배포 주소

👉 [https://weather-mood.vercel.app](https://weather-mood.vercel.app)

---

## 📸 주요 기능

- 📍 **현재 위치 기반 날씨 정보 조회 (OpenWeatherMap API)**
- 🎵 **날씨에 어울리는 음악 자동 추천 (YouTube Embed API)**
- 😺 **날씨별 감정 표현 이모지 및 문구 출력**
- 📱 **반응형 디자인 (Tailwind CSS 적용)**
- ☁️ **Vercel을 통한 배포 및 공유**

---

## 🛠 사용 기술 스택

| 항목         | 기술                  |
|--------------|-----------------------|
| 프레임워크   | Next.js (App Router)  |
| 언어         | TypeScript            |
| 스타일링     | Tailwind CSS          |
| 날씨 API     | OpenWeatherMap API    |
| 음악 추천 API| YouTube Embed         |
| 배포         | Vercel                |
| 상태 관리    | React 내장 useState   |

---

## 📁 폴더 구조

```bash
src/
├── app/
│   ├── components/        # WeatherCard, GPTQuote, YouTubeEmbed 등
│   ├── page.tsx           # 메인 페이지
│   └── layout.tsx         # 레이아웃 구성
├── lib/                   # 날씨, 음악, 메시지 API 함수
├── public/weather-bg/     # 날씨별 배경 이미지
├── styles/                # 글로벌 스타일
├── types/                 # TypeScript 타입 정의
└── .env.local             # 환경변수 (API KEY 등)
