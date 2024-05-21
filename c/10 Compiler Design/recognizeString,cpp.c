/*
Problem No : 04
Problem Name: Write a C++ program that Recognize the under 'xy*' and 'a+b',
Problem Statement: The task at hand is to develop a C++ program capable of recognizing specific patterns within user-entered strings. These patterns include the 'xy*' pattern, where an 'x' is followed by zero or more 'y's, and the 'a+b' pattern.

*/

#include <bits/stdc++.h>

using namespace std;

bool containsPattern(const string& input, const string& pattern) {
    regex reg(pattern);
    return regex_search(input, reg);
}

int main() {
    string input;
    cout << "Enter a string: ";
    getline(cin, input);

    cout << (containsPattern(input, "xy*") ? "Pattern 'xy*' found" : "Pattern 'xy*' not found") << endl;
    cout << (containsPattern(input, "a\\+b") ? "Pattern 'a+b' found" : "Pattern 'a+b' not found") << endl;

    return 0;
}
