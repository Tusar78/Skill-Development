/*
Problem No : 01
Problem Name: Comment Detector
Problem Statement: Write a C/C++ Code to detect whether a given line is a comment or not.
*/

#include<iostream>
using namespace std;

int main(){
    string in;
    cout<<"Enter Text: ";
    getline(cin,in);
    int len = in.length();

    if(in[0]=='/' && in[1]=='/'){
        cout<<"Single Line Comment";
    }else if(in[0]=='/' && in[1]=='*' && in[len - 2]=='*' && in[len-1]=='/'){
        cout<<"Multiple Line Comment";
    }else{
        cout<<"Not a Comment";
    }
}
