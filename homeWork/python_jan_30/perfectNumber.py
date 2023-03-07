def perfectNumber(num):  
    sum = 0  
    for i in range(1, num):  
        if num % i == 0:  
            sum=sum+i  
    return sum == num 

print(perfectNumber(8))  