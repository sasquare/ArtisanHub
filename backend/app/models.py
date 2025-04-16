from database import Base
from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    email = Column(String, unique=True, index=True)
    phone = Column(String, nullable=True)
    location = Column(String, nullable=True)
    services = Column(String, nullable=True)  # Comma-separated for artisans