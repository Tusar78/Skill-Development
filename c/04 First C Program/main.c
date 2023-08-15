#include<stdio.h>

/*
=> Algorithm for get a big numbers between two numbers.

    1. Start
    2. Get input from user Num1 & Num2
    3. IF Num1 is greater than Num2
        i) Yes? Num1 is print
        ii) No? Num2 is print
    4. End
*/

int main() {
    int Num1, Num2, result;

    printf("Enter your first letter: ");
    scanf("%d", &Num1);

    printf("Enter your second letter: ");
    scanf("%d", &Num2);

    if(Num1 > Num2) {
        result = Num1;
    } else {
        result = Num2;
    }

    printf("Bigger Number is: %d", result);

    return 0;
}
