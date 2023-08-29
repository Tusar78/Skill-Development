#include<stdio.h>

int linearSearch(int arr[], int n, int elem) {
    int found = -1;
    for(int i = 0; i < n; i++) {
        if(elem == arr[i]) {
            return found = i;
            break;
        }
    }

    return found;
}

int main() {
    int x[] = {5, 7, 9, 2, 3, 2};
    int n = sizeof(x) / sizeof(x[0]);
    int k;

    printf("Enter your search number: ");
    scanf("%d", &k);

    int result = linearSearch(x, n, k);

    printf("%d", result);

    getch();
}
