#include <stdio.h>

int main() {
    double num1, num2, value;
    char sign;

    printf("Enter a number: ");
    scanf("%lf", &num1);
    printf("Enter another number: ");
    scanf("%lf", &num2);

    value = num1 + num2;
    sign = '+';
    printf("%lf %c %lf = %0.2lf\n", num1, sign, num2, value);

    value = num1 - num2;
    sign = '-';
    printf("%lf %c %lf = %0.2lf\n", num1, sign, num2, value);

    value = num1 * num2;
    sign = '*';
    printf("%lf %c %lf = %0.2lf\n", num1, sign, num2, value);

    value = num1 / num2;
    sign = '/';
    printf("%lf %c %lf = %0.2lf\n", num1, sign, num2, value);

    return 0;
}
