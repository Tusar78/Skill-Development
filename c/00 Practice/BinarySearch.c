#include <stdio.h>

int binarySearch(int arr[], int data, int low, int high)
{
    while(low <= high)
    {
        int mid = (low + high) / 2;
        if(data == arr[mid])
        {
            return mid;
        }
        else if(data > arr[mid])
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    return -1;
}

int main() {
    int arr[] = {5,7,9,12,15,20,24,27,33,40,50,65,72};
    int data, n, low, high, result;

    printf("Enter your desire element: ");
    scanf("%d", &data);

    n = sizeof(arr) / sizeof(arr[0]);
    low = 0;
    high = n - 1;

    result = binarySearch(arr, data, low, high);

    result == -1 ? printf("Desire element is not found") : printf("Desire element position is: %d", result);

    getch();
    return 0;
}
