#include<stdio.h>

/*
    1. Write a program to convert uppercase to lower and lowercase to uppercae
*/

int main() {
    char c, toLower, toUpper;

    printf("Type any character: ");
    scanf("%c", &c);

    if(c >= 65 && c <= 96) {
        toLower = c + 32;
        printf("Lowercase Letter is: %c", toLower);
    } else if (c >= 97 && c <= 122) {
        toUpper = c - 32;
        printf("Uppercase Letter is: %c", toUpper);
    } else {
        printf("\aWrong Character!");
    }

    getch();

    return 0;
}


/*

int main() {
	char upper, lower;

	printf("Type any Uppercase Letter: ");
	scanf("%c", &upper);

	lower = tolower(upper);

	printf("Your lowercase Letter is: %c", lower);
}

int main() {
    char lower, upper;

    printf("Type any lowercase letter: ");
    scanf("%c", &lower);

    upper = toupper(lower);

    printf("Your UPPERCASE letter is: %c", upper);

    getch();
    return 0;
}

int main() {
    char name;
    int toLowerCase;

    printf("Enter your UPPERCASE letter: ");
    scanf("%c", &name);

    toLowerCase = name + 32;

    printf("Your lowercase letter is: %c", toLowerCase);
    getch();
}


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
