# 🧠 LibreMind

**LibreMind** is an open-source, AI-powered mental wellness companion designed with **privacy, empathy, and extensibility** at its core.  
It provides a soothing 3D chatbot, voice-enabled conversations, and evidence-based coping tools - accessible across Web, Android, and iOS platforms.

---

## 🌟 Why LibreMind?

Mental health support should be:

- ✅ **Private** - No forced logins; your data stays on your device  
- ✅ **Free** - No subscriptions, no ads  
- ✅ **Inclusive** - Multilingual, accessible, culturally adaptive  
- ✅ **Extensible** - Easily add new tools, plugins, or AI backends  

LibreMind empowers users to care for their mental wellness with a friendly AI companion anytime, anywhere.

---

## 📦 Tech Stack

| Platform | Technology              | Purpose                                |
| -------- | ----------------------- | ------------------------------------ |
| Web      | Next.js (PWA)           | SEO-friendly, offline-capable web app |
| Mobile   | React Native + Expo     | Native Android & iOS mobile apps      |
| Backend  | FastAPI / Express       | AI chatbot API and business logic     |
| AI       | OpenAI / Ollama / Custom| Conversational AI brain               |
| 3D UI    | Three.js + React Fiber  | Interactive 3D chatbot avatar         |
| Voice    | Web Speech API / Expo TTS | Speech-to-text and text-to-speech     |

---

## 🚀 Features (Phase 1 MVP)

- 🤖 Empathetic 3D AI chatbot with natural conversations  
- 🔊 Voice input/output with speech recognition and synthesis  
- 📘 Daily mood tracking and journaling  
- 🧘 Built-in coping exercises (e.g., breathing, grounding)  
- 🌐 Offline support via PWA and native apps  
- 🧩 Plugin system planned for future extensibility  

---

## 📁 Project Structure

```
libremind/
├── apps/
│   ├── web/            # Next.js progressive web app
│   └── mobile/         # React Native (Expo) mobile app
├── packages/
│   ├── chatbot-core/   # Shared AI/chat logic & utilities
│   └── ui/             # Reusable UI components
├── backend/            # FastAPI or Express backend server
└── README.md           # This file
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v16+ recommended)  
- npm or yarn  
- Python 3.8+ (if using FastAPI backend)  
- Expo CLI (for mobile app development)

---

### Run the Web App

```bash
cd apps/web
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

### Run the Mobile App

```bash
cd apps/mobile
npm install
npx expo start
```

Open the Expo Go app on your device or simulator.

---

### Run the Backend API

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

API will run on `http://localhost:8000`.

---

## 🤝 Contributing

Contributions are welcome! You can help by:

- Adding new coping tools or chatbot features  
- Integrating additional AI backends  
- Improving UI/UX and accessibility  
- Translating to other languages  
- Fixing bugs and enhancing performance  

Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for contribution guidelines and code of conduct.

---

## 📄 License

This project is licensed under the **MIT License** — see the [`LICENSE`](./LICENSE) file for details.

---

## ✨ Vision

> _“Free, private, and empathetic mental wellness support — for everyone, everywhere.”_

Join us in building a compassionate AI companion that helps people nurture their mental health with dignity and trust.
