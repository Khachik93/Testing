f = open("test.txt", "r")
w = open("test2.txt", "w")
getLine = f.readlines()
for i in getLine:
    if i[0:5] == "hello":
        w.write(i)

# print(getLine)
f.close()
w.close()