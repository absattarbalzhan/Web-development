n = int(input())
a = list(map(int,input().strip().split()))[:n] 
cnt = 0

for i in a:
    if i > 0:
        cnt += 1

print(str(cnt))
