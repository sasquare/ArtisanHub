from fastapi import APIRouter
import sqlite3

router = APIRouter()

def init_db():
    conn = sqlite3.connect('artisanhub.db')
    c = conn.cursor()
    # Drop table to reset schema
    c.execute('DROP TABLE IF EXISTS artisans')
    # Create table with correct schema
    c.execute('''CREATE TABLE artisans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        service TEXT NOT NULL,
        location TEXT,
        contact TEXT
    )''')
    # Insert sample artisans
    sample_artisans = [
        ('Chukwudi Okoye', 'Carpentry', 'Lagos', '08012345678'),
        ('Amina Bello', 'Plumbing', 'Abuja', '08123456789'),
        ('Funke Adeyemi', 'Tailoring', 'Ibadan', '07034567890'),
        ('Emeka Nwosu', 'Electrical', 'Enugu', '09045678901'),
        ('Suleiman Ibrahim', 'Masonry', 'Kano', '08056789012'),
        ('Chioma Eze', 'Painting', 'Port Harcourt', '08167890123'),
        ('Tunde Lawal', 'Fashion Designers', 'Lagos', '07078901234'),
        ('Ngozi Obi', 'Hair Stylist/Barber', 'Abuja', '09089012345'),
        ('Yusuf Abdullahi', 'Welding Work', 'Kaduna', '08090123456'),
        ('Kemi Adetola', 'Photography', 'Ibadan', '08101234567'),
        ('Blessing Udo', 'Pedicure/Manicure', 'Uyo', '07012345678'),
        ('Rita Okafor', 'Makeup Artist', 'Lagos', '09023456789'),
        ('Ahmed Musa', 'Transport and Logistics', 'Abuja', '08034567890'),
    ]
    c.executemany('INSERT INTO artisans (name, service, location, contact) VALUES (?, ?, ?, ?)', sample_artisans)
    conn.commit()
    conn.close()

# Initialize DB on startup
init_db()

@router.get("/api/artisans")
async def get_artisans():
    conn = sqlite3.connect('artisanhub.db')
    c = conn.cursor()
    c.execute('SELECT DISTINCT service FROM artisans')
    services = [row[0] for row in c.fetchall()]
    c.execute('SELECT id, name, service, location, contact FROM artisans')
    artisans = [{'id': row[0], 'name': row[1], 'service': row[2], 'location': row[3], 'contact': row[4]} for row in c.fetchall()]
    conn.close()
    return {"services": services, "artisans": artisans}