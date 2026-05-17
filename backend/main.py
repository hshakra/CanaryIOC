import os
import httpx

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

threatfox_api_key = os.getenv("THREATFOX_API_KEY", "")


@app.get("/")
def root():
    return {"Foxdex": "Test"}


class RecentRequest(BaseModel):
    days: int


@app.post("/api/recent")
async def get_recent(recent: RecentRequest):
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://threatfox-api.abuse.ch/api/v1/",
            headers={"Auth-Key": threatfox_api_key},
            json={"query": "get_iocs", "days": recent.days},
        )
        return response.json()
