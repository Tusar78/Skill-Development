/*
#include <stdio.h>

int main() {
    char ch;
    printf("Enter you favorite Character: ");
    scanf("%c", &ch);
    printf("Your Character is %c\n", ch);

    if(ch == 'a') {
        printf("This is small %c\n", ch);
    } else if (ch == 'A') {
        printf("This is Capital %c\n", ch);
    }

    if(ch == 'b') {
        printf("This is small %c\n", ch);
    } else if (ch == 'B') {
        printf("This is Capital %c\n", ch);
    }

    if(ch == 'c') {
        printf("This is small %c\n", ch);
    } else if (ch == 'C') {
        printf("This is Capital %c\n", ch);
    }
}
*/

#include <stdio.h>

int main() {
    /*
    char ch;

    printf("Enter your favorite character: ");
    scanf("%c", &ch);

    if(ch >= 'a' && ch <= 'z') {
        printf("%c is Lower case \n", ch);
    } else if (ch >= 'A' && ch <= 'Z') {
        printf("%c is Upper case \n", ch);
    }
    */

    int num;
    printf("Enter your favorite number: ");
    scanf("%c", &num);

    if(num >= 1 || num <= 10) {
        printf("Condition Successfully!");
    }
}
