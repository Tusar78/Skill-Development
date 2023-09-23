#include<stdio.h>

int main() {
    int num1, num2, num3, sum, avg;

    printf("Enter your three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    sum = num1 + num2 + num3;
    avg = sum / 3;

    printf("Your summation is = %d\n", sum);
    printf("Your Average is = %d", avg);
}
