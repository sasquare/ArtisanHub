from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import artisans, auth
from config.database import init_db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()
app.include_router(artisans.router)
app.include_router(auth.router)

@app.get("/")
async def root():
    return {"message": "Welcome to ArtisanHub API"}