from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.database import connect_db, init_db

app = FastAPI()

# Initialize database tables
init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to ArtisanHub API"}

@app.get("/test-db")
async def test_db():
    try:
        with connect_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
            tables = [row[0] for row in cursor.fetchall()]
            return {"status": "SQLite connected", "tables": tables}
    except Exception as e:
        return {"error": str(e)}