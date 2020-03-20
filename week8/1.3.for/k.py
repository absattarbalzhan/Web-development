numbers = input()
numberList = numbers.split()
sum = 0

for num in numberList:
    sum += int(num)
print(sum)