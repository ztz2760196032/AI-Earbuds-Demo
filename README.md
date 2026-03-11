# AI Earbuds Demo

一个前后端分离的项目骨架：
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: FastAPI

目前仅包含基础目录结构与占位页面，方便后续按产品文档逐步扩展。

## 目录结构

```bash
.
├── frontend/              # React + Vite + Tailwind
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/               # FastAPI
│   ├── app/
│   │   └── main.py
│   └── requirements.txt
└── README.md
```

---

## 前端启动（React + Vite + Tailwind）

```bash
cd frontend
npm install
npm run dev
```

默认启动在：`http://localhost:5173`

可选构建：

```bash
npm run build
npm run preview
```

---

## 后端启动（FastAPI）

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

接口地址：`http://localhost:8000`

健康检查：`GET /health`

---

## 当前状态

- ✅ 已完成前后端基础脚手架
- ✅ 前后端可独立启动
- ✅ 提供占位页面与占位接口
- ⏳ 业务逻辑待后续按 PDF 详细需求补充
