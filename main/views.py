from flask import Flask, request, abort, redirect, url_for, render_template
from main import app

@app.route("/")
def index():

    return 'Hello, World'

@app.route("/check", methods=['GET','POST'])
def check():
    if request.method == 'POST':
        import os
        import traceback
        submitted_script = request.form["submitted_script"]
        print("Make test.py")
        f = open('test.py','w')
        f.write(submitted_script)
        f.close()
        print("Save and Run!")
        print("test.py was finished with following outputs")
        print("-----------------------")
        try:
            import test
            print("-----------------------")
            print("Good job!")
        except Exception as e:
            print(traceback.format_exc())
            print("-----------------------")
            print("Never give up!")
        os.remove('test.py')
    
    return render_template('check.html')

if __name__ == "__main__":
    print("Please run run.py")
