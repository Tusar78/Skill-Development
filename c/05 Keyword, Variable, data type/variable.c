#include<stdio.h>

/*
    1. Write a program that prints an integer number;
    note: An integer variable contain number of 10;

int main() {
    int num1 = 10;
    int num2 = 20;
    printf("First integer is = %d\n", num1);
    printf("Second integer is = %d", num2);

    getch();
}
*/

/*
    2. Write a program that print an integer, Float, double and Also Character;

int main() {
    int age = 24;
    float height = 5.67;
    char name = 'T';

    printf("My name is %cusar. This is %d years old. My height is = %0.2f", name, age, height);
}
*/

/*
    1. Write a program to scanf data from user and print this data
*/

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Your age is: %d", age);

    getch();
}
