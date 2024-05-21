/*
Problem No : 03
Problem Name: Write a C/C++ code to identify valid keywords.
Problem Statement: C++ code aims to determine whether a given input string is a valid C++ keyword or not. The list of valid keywords in your code is quite comprehensive. The program takes a user input string, checks it against the list of valid keywords, and prints whether it is a valid keyword or not.

*/

#include <bits/stdc++.h>

using namespace std;

bool isValidKeyword(const string& str) {
    static const string keywords[] = {
        "alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor",
        "bool", "break", "case", "catch", "char", "char8_t", "char16_t", "char32_t",
        "class", "compl", "concept", "const", "consteval", "constexpr", "const_cast",
        "continue", "co_await", "co_return", "co_yield", "decltype", "default", "delete",
        "do", "double", "dynamic_cast", "else", "enum", "explicit", "export", "extern",
        "false", "float", "for", "friend", "goto", "if", "inline", "int", "long",
        "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator",
        "or", "or_eq", "private", "protected", "public", "register", "reinterpret_cast",
        "requires", "return", "short", "signed", "sizeof", "static", "static_assert",
        "static_cast", "struct", "switch", "synchronized", "template", "this", "thread_local",
        "throw", "true", "try", "typedef", "typeid", "typename", "union", "unsigned",
        "using", "virtual", "void", "volatile", "wchar_t", "while", "xor", "xor_eq"
    };

    return binary_search(begin(keywords), end(keywords), str);
}

int main() {
    string input;
    cout << "Enter a string: ";
    cin >> input;

    if (isValidKeyword(input)) {
        cout << "Valid C++ keyword." << endl;
    } else {
        cout << "Not a valid C++ keyword." << endl;
    }

    return 0;
}
