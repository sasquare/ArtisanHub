from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def connect_db():
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client["artisanhub"]
    return db

def close_db(client):
    client.close()