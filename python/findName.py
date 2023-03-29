def findNames(text):
    words = text.split()
    for i in range(len(words)):
        count = 0
        if (words[i][0].isupper() and words[i].isupper):
            count += 1
            print(f"{ words[i]}':'{count}") 
             
texts = "Tux is a penguin character and the official brand character of the LINUX kernel. Originally created as an entry to a Linux logo competition, TUX is the most commonly used icon for Linux, although different Linux distributions depict Tux in various styles. The character is used in many other lInux programs and as a general symbol of Linux."
findNames(texts)
