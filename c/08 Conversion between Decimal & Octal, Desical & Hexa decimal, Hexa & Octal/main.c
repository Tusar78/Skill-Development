#include<stdio.h>

/*
    1. Write a program to convert decimal numbers to Hexadecimal or octal numbers.
*/

int main() {
    int num;

    printf("\t   Enter any decimal number: ");
    scanf("%d", &num);

    printf("\n");
    printf("\t   Hexadecimal = %x\n", num);
    printf("\t   Octal = %o\n", num);

    getch();

    return 0;
}


/*
int main() {
    int hex;

    printf("Enter any hex number: ");
    scanf("%x", &hex);

    printf("%x Hex = %o Octal", hex, hex);
}

int main() {
    int num;

    printf("Enter any Octal number: ");
    scanf("%o", &num);

    printf("%o Octal = %d Decimal", num, num);

    getch();

    return 0;
}


int main() {
    int num;

    printf("Enter any decimal number: ");
    scanf("%d", &num);

    printf("%d Decimal = %x Hexa", num, num);

}

*/
