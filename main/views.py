from flask import Flask, request, abort, redirect, url_for, render_template
from main import app

@app.route("/")
def index():

    return 'Hello, World'

@app.route("/check")
def check():
    return render_template('check.html')

if __name__ == "__main__":
    print("Please run run.py")
