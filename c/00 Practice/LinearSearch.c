#include<stdio.h>

int main() {
    int x[] = {5, 7, 9, 2, 3};
    int n = sizeof(x) / sizeof(x[0]);
    int k;

    printf("Enter your desire number: ");
    scanf("%d", &k);

    printf("\n");

    int found = 0;

    /*
    for(int i = 0; i < n; i++) {
        if(k == x[i]) {
            printf("Your Search Number Position is: %d", i);

            found++;
            break;
        }
    }*/

    int i = 0;
    while(i < n) {

        if(k == x[i]) {
            printf("Your Search Number Position is: %d", i);

            found++;
            break;
        }
        i++;
    }

    if(found == 0) {
        printf("Your Search Number is Not Found");
    }
    getch();
}
