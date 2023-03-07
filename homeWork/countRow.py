with open(r"test.txt", 'r') as fp:
    x = len(fp.readlines())
   print('Total lines:', x)