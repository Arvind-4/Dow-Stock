import json
from typing import Optional
from fastapi import FastAPI

from .stocks import get_dow30_data

app = FastAPI()


@app.get("/api/")
async def index():
    return {"message": "Hello World", "status": True, "data": {}}


@app.get("/api/stocks/")
async def getStocks(start: Optional[str] = None, end: Optional[str] = None):
    if start is None or end is None:
        return {"message": "start and end is required", "status": False, "data": {}}
    data = get_dow30_data(
        "-".join(start.split("-")[::-1]), "-".join(end.split("-")[::-1])
    )
    if data == {}:
        return {"message": "Data not found", "status": False, "data": {}}
    return {
        "message": "Data retrieved successfully",
        "status": True,
        "data": json.loads(data),
    }
