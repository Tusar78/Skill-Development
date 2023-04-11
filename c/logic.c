#include <stdio.h>

int main()
 {
    int num1, num2, sign, dividend, divisor, count, result;

    printf("Enter dividend Number: ");
    scanf("%d", &num1);
    printf("Enter divisor Number: ");
    scanf("%d", &num2);

    sign = num1 < 0 ? -1 : 1;
    if(num1 < 0) {
        num1 = -num1;
    }
    if(num2 < 0) {
        num2 = -num2;
    }
    dividend = num1;
    divisor = num2;

    count = dividend;
    while(count >= divisor) {
        count = count - divisor;
    }

    result = sign * count;

    if(result == 1) {
        printf("The number is Odd");
    } else {
        printf("The number is Even");
    }
 }
