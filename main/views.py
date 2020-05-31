from flask import Flask, request, abort, redirect, url_for, render_template
from main import app

@app.route("/")
def index():
   return render_template('index.html')

@app.route("/game")
def game():
    return render_template('game.html')

@app.route("/end")
def finish():
    return render_template('end.html')

@app.route("/start")
def start():
    return render_template('start.html')
  
@app.route("/test", methods=['POST'])
def test():
    if request.method == 'POST':
        import os
        import traceback
        import subprocess

        submitted_script = request.form["submitted_script"]
        #print("Make test.py")
        f = open('test.py','w')
        f.write(submitted_script)
        f.close()
        #print("Save and Run!")
        #print("test.py was finished with following outputs")
        #print("-----------------------")
        try:
            result = subprocess.check_output(['python', 'test.py']).decode()
        except Exception as e:
            result= traceback.format_exc()
        os.remove('test.py')
    
    print(result)
    return result

@app.route('/check')
def check():
    return render_template('check.html')

if __name__ == "__main__":
    print("Please run run.py")
