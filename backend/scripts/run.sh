#!/bin/bash

APP_PORT=${PORT:-8000}
uvicorn app.main:app  --host 0.0.0.0 --port $APP_PORT --reload
