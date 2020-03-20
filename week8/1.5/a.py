def min(a,b) :
    if a > b:
        return b
    else: return a


a,b,c,d=input().split()
mini= min(min(a,b),min(c,d))
print(str(mini))