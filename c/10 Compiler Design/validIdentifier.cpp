/*
Problem No : 02
Problem Name: Valid Identifier Checker
Problem Statement: Write a program that checks whether a given string is a valid identifier according to the rules of the C++ language.
*/

#include <bits/stdc++.h>

using namespace std;

bool isValidIdentifier(const string& str) {
    if (str.empty()) {
        return false;
    }
    if (!isalpha(str[0]) && str[0] != '_') {
        return false;
    }
    for (size_t i = 1; i < str.length(); ++i) {
        if (!isalnum(str[i]) && str[i] != '_') {
            return false;
        }
    }
    return true;
}
int main() {
    string identifier;
    cout << "Enter your identifier: ";
    cin >> identifier;
    if (isValidIdentifier(identifier)) {
        cout << "Valid identifier." << endl;
    } else {
        cout << "Invalid identifier." << endl;
    }
    return 0;
}
