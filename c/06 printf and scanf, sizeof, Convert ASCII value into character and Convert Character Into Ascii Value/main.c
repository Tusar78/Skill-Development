#include<stdio.h>

int main() {
    char c;
    printf("Enter your character: ");
    scanf("%c", &c);

    printf("ASCII of %c = %d", c, c);
}

/*
int main() {
    int ASCIINUM;
    printf("Enter your ASCII value: ");
    scanf("%d", &ASCIINUM);

    printf("ASCII value %d to Character: %c", ASCIINUM, ASCIINUM);
}


int main() {
    int num1;
    float num2;
    double num3;
    char c1, c2, c3, c4, c5, c;
    //printf("Enter some characters: ");
    //scanf("%d %f %lf %c", &num1, &num2, &num3, &name);
   // scanf("%c %c %c %c %c", &c1, &c2, &c3, &c4, &c5);
      printf("Your Name is: %c%c%c%c%c\n", c1, c2, c3, c4, c5);
      printf("Your Name is: %c%c%c%c%c\n", c1, c2, c3, c4, c5);

    for(int i = 0; i < 5; i++) {
        printf("Enter some characters: ");
        scanf("%c", &c);
        printf("Your Name is: %c", c);
    }
    return 0;
}



int main() {
    int i;
    float f = 2.4544;
    double d = 14.5646745765;
    char c = 'T';

    int arr[10] = {10,20,30,40,50};

    printf("Integer size: %d bytes\n", sizeof(i));
    printf("Float size: %d bytes\n", sizeof(f));
    printf("Double size: %d bytes\n", sizeof(d));
    printf("Character size: %d bytes\n", sizeof(c));
    printf("Character size: %d bytes\n", sizeof(arr)/sizeof(arr[0]));
}
*/
