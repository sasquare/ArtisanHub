from fastapi import APIRouter, Query
import sqlite3

router = APIRouter()

@router.get("/api/artisans")
async def get_artisans(search: str = Query(None)):
    conn = sqlite3.connect('artisanhub.db')
    c = conn.cursor()
    c.execute('SELECT DISTINCT service FROM artisans')
    services = [row[0] for row in c.fetchall()]
    
    if search:
        search_term = f"%{search}%"
        c.execute('''
            SELECT id, name, service, location, contact 
            FROM artisans 
            WHERE name LIKE ? OR service LIKE ? OR location LIKE ?
        ''', (search_term, search_term, search_term))
    else:
        c.execute('SELECT id, name, service, location, contact FROM artisans')
    
    artisans = [{'id': row[0], 'name': row[1], 'service': row[2], 'location': row[3], 'contact': row[4]} for row in c.fetchall()]
    conn.close()
    return {"services": services, "artisans": artisans}