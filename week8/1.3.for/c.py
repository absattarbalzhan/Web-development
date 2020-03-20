import math
a=int(input(" "))
b=int(input(" "))
c=int(math.ceil(math.sqrt(a)))
d=int(math.ceil(math.sqrt(b)))


for i in range(c,d):
        print(i*i)
