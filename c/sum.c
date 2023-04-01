#include <stdio.h>

int main() {
    double a = 10.1, b = 2.147, sum;

    sum = a + b;

    printf("Summation is = %lf\n", sum);
    printf("Summation is = %0.2lf\n", sum);
    printf("Summation is = %0.0lf\n", sum);
    return 0;
}
