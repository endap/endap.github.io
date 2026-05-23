# flask --app app run --debug --port=5500

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": [
    "http://localhost:1313",
    "https://dudung.github.io",
    "https://dudung.github.io/butiran"
]}})

@app.route("/")
def home():
    print("Request from Origin:", request.headers.get("Origin"))
    return "a response from butiran-backend on pythonanywhere"
