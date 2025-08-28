from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

items = ["apple", "banana", "cherry"]

@app.get("/items")
def get_items():
    return {"items": items}

@app.post("/items/{new_item}")
def add_item(new_item: str):
    items.append(new_item)  # modify array
    return {"items": items}
