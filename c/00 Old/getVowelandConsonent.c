#include <stdio.h>

int main() {
    char ch;

    printf("Enter your favorite Character: ");
    scanf("%c", &ch);

    int vowel = ch == 'a' || ch == 'e' || ch == 'i' ||  ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U';

    if(vowel) {
        printf("%c is vowel \n", ch);
    } else {
        printf("%c is consonent\n", ch);
    }
}
