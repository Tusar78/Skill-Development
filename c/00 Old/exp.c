#include <stdio.h>
#include <string.h>

int main() {
    char text[] = "Hello, world!";
    int consoleWidth = 80; // Assuming console width of 80 characters

    int textLength = strlen(text);
    int padding = (consoleWidth - textLength) / 2;

    printf("%*s%s%*s\n", padding, "", text, padding, "");

    return 0;
}
