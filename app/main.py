from typing import Optional
from fastapi import FastAPI, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware

from .stocks import get_dow30_data

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
async def index(request: Request, response: Response):
    return {"message": "Hello World", "status": True, "data": {}}


@app.get("/api/stocks")
async def getStocks(
    request: Request,
    response: Response,
    start: Optional[str] = None,
    end: Optional[str] = None,
):
    if start is None or end is None:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "start and end is required", "status": False, "data": {}}
    data = get_dow30_data(start, end)
    if data == {}:
        return {"message": "Data not found", "status": False, "data": {}}
    return {
        "message": "Data retrieved successfully",
        "status": True,
        "data": data,
    }
