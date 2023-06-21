#include<stdio.h>

int main() {
    char name;
    int toLowerCase;

    printf("Enter your UPPERCASE letter: ");
    scanf("%c", &name);

    toLowerCase = name + 32;

    printf("Your lowercase letter is: %c", toLowerCase);
    getch();
}

/*
int main() {
    char name;
    int toUpperCase;

    printf("Enter your lowercase letter: ");
    scanf("%c", &name);

    toUpperCase = name - 32;

    printf("Converted lowercase %c to uppercase %c", name, toUpperCase);
    //printf("Character %c to ASCII %c", name, toUpperCase);
}
*/
