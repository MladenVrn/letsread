from pydantic import BaseModel


class CategorySchema(BaseModel):
    id = int
    category_name = str
    category_id = int

    class Config:
        orm_mode = True