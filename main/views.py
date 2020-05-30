from flask import Flask, request, abort, redirect, url_for, render_template
from main import app

@app.route("/")
def game():
    return render_template('game.html')

if __name__ == "__main__":
    print("Please run run.py")
