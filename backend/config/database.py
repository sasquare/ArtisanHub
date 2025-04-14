import sqlite3
from contextlib import contextmanager

def connect_db():
    """Connect to SQLite database and return connection."""
    conn = sqlite3.connect("artisanhub.db")
    conn.row_factory = sqlite3.Row  # Access rows as dictionaries
    return conn

@contextmanager
def get_db():
    """Context manager for database connection."""
    conn = connect_db()
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    """Initialize database with tables."""
    with get_db() as conn:
        cursor = conn.cursor()
        # Create users table (example)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        """)
        # Create artisans table (example)
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS artisans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                service TEXT NOT NULL,
                location TEXT NOT NULL
            )
        """)
        conn.commit()