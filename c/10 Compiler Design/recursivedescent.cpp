
#include <bits/stdc++.h>

using namespace std;

bool match(char expected, const string& input, int& index) {
    if (input[index] == expected) {
        index++;
        return true;
    }
    return false;
}

bool E(const string& input, int& index);
bool E_prime(const string& input, int& index);
bool T(const string& input, int& index);
bool T_prime(const string& input, int& index);
bool F(const string& input, int& index);

bool E(const string& input, int& index) {
    if (T(input, index) && E_prime(input, index))
        return true;
    return false;
}

bool E_prime(const string& input, int& index) {
    int tempIndex = index;
    if (match('+', input, index) && T(input, index) && E_prime(input, index))
        return true;
    index = tempIndex;
    return true;
}

bool T(const string& input, int& index) {
    if (F(input, index) && T_prime(input, index))
        return true;
    return false;
}

bool T_prime(const string& input, int& index) {
    int tempIndex = index;
    if (match('*', input, index) && F(input, index) && T_prime(input, index))
        return true;
    index = tempIndex;
    return true;
}

bool F(const string& input, int& index) {
    if (isalnum(input[index])) {
        index++;
        return true;
    }
    if (match('(', input, index) && E(input, index) && match(')', input, index))
        return true;
    return false;
}

int main() {
    string input;
    cout << "Enter an arithmetic expression: ";
    cin >> input;
    int index = 0;
    if (E(input, index) && index == input.size()) {
        cout << "Valid expression!" << endl;
    } else {
        cout << "Invalid expression!" << endl;
    }
    return 0;
}
