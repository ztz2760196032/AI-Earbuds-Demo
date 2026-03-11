from fastapi import FastAPI

app = FastAPI(title="AI Earbuds Demo API", version="0.1.0")


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "AI Earbuds Demo backend is running."}


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
