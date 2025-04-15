import sqlite3

def init_db():
    conn = sqlite3.connect('artisanhub.db')
    cursor = conn.cursor()
    # Artisans table
    cursor.execute('DROP TABLE IF EXISTS artisans')
    cursor.execute('''
        CREATE TABLE artisans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            service TEXT NOT NULL,
            location TEXT,
            contact TEXT
        )
    ''')
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
    cursor.executemany('INSERT INTO artisans (name, service, location, contact) VALUES (?, ?, ?, ?)', sample_artisans)
    # Users table
    cursor.execute('DROP TABLE IF EXISTS users')
    cursor.execute('''
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()