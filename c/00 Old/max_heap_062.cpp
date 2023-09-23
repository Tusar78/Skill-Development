#include<bits/stdc++.h>
using namespace std;

void heapify(int arr[], int n, int i){
    int largest = i;
    int left = (i * 2) +1;
    int right = (i * 2) + 2;
    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }
    if(largest != i){
        swap(arr[i],arr[largest]);
        heapify(arr, n, largest);
    }
}
int main(){
    int arr[] = {18, 13, 4, 8, 9, 7, 56};
    int size = sizeof(arr)/sizeof(arr[0]);
    for(int i = size/2 -1; i >=0; i--){
        heapify(arr,size, i);
    }
    cout << "Max Heap: ";
    for(int i = 0; i<size; i++){
        cout<<arr[i]<<",";
    }
}
