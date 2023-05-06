from typing import Union
from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from schema.category_schema import CategorySchema
from database_config import SessionLocal, engine
from models.category_model import CategoryModel 

#create table
CategoryModel.metadata.create_all(bind=engine)
#create dbsession
def get_database_session():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

#app instance
app = FastAPI()

#default get route
@app.get("/")
def read_root(request: Request,  db: Session = Depends(get_database_session)):
    categories = db.query(CategoryModel).all()
    print(categories)
    return {"Category": categories}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}