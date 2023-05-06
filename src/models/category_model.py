from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text
from database_config import Base

#category class
class CategoryModel(Base):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String(255))
    category_id = Column(Integer)
