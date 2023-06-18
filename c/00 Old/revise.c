#include <stdio.h>

int main()
 {
    char ch;

    printf("Enter your character: ");
    scanf("%c", &ch);

    if(ch >= 'a' && ch <= 'z') {
        printf("This is lowercase letter!");
    } else if (ch >= 'A' && ch <= 'Z') {
        printf("This is uppercase letter!");
    } else {
        printf("This is special Character");
    }
 }
