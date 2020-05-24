from flask import Flask, request, abort
from main import app

@app.route("/")
def index():

    return 'Hello, World'

if __name__ == "__main__":
    print("Please run run.py")
