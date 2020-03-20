n = int(input())
a = list(map(int,input().strip().split()))[:n] 
length = len(a)
cnt = 0
for i in range(1, length):
    if (a[i - 1] > 0) and (a[i] > 0) or (a[i - 1] < 0) and (a[i] < 0):
        cnt = 1
        break
if cnt == 1:
    print("YES")
else:
    print("NO")