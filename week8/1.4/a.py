  
n = int(input())
a = list(map(int,input().strip().split()))[:n] 
k = 0

for i in a:
    if k % 2 == 0:
        print(str(i), end=' ')
    k +=1