import os
import traceback

submitted_script = input('Your code here! :')

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
