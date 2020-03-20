n = int(input())
a = list(map(int,input().strip().split()))[:n] 


for i in a:
    if i % 2 == 0:
        print(str(i), end=' ')
    i+=1