#include <stdio.h>

int main()
 {
     int number, reminder;
     printf("Enter your number: ");
     scanf("%d", &number);
     reminder = number % 2;
     if(reminder == 0) {
        printf("This is even Number.\n");
     }
     return 0;
 }
