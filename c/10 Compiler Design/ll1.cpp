#include <iostream>
#include <stack>
#include <string>

using namespace std;

// Define the LL(1) parsing table as a 2D array
string parsingTable[4][5] = {
    {"TE'", "", "", "TE'", ""},
    {"", "+TE'", "", "ε", "ε"},
    {"FT'", "", "", "FT'", ""},
    {"", "ε", "", "*FT'", "ε"}
};

// Function to map terminals to column index
int terminalIndex(char terminal) {
    switch (terminal) {
        case '+': return 0;
        case '*': return 1;
        case 'i': return 2;
        case '(': return 3;
        case ')': return 4;
        default: return -1;
    }
}

// Function to perform LL(1) parsing
bool parse(string input) {
    stack<char> symbolStack;
    symbolStack.push('$'); // Initial symbol
    symbolStack.push('E'); // Starting non-terminal

    size_t inputIndex = 0;
    while (!symbolStack.empty()) {
        char currentSymbol = symbolStack.top();
        symbolStack.pop();

        if (currentSymbol == '$') {
            if (input[inputIndex] == '$') {
                cout << "String Accepted" << endl;
                return true;
            } else {
                cout << "String Rejected" << endl;
                return false;
            }
        }

        if (currentSymbol == input[inputIndex]) {
            inputIndex++;
        } else if (isupper(currentSymbol)) {
            int row = currentSymbol - 'E'; // Convert non-terminal to row index
            int col = terminalIndex(input[inputIndex]);
            if (col != -1) {
                string production = parsingTable[row][col];
                if (production != "") {
                    // Push the production onto the stack in reverse order
                    for (int i = production.size() - 1; i >= 0; i--) {
                        symbolStack.push(production[i]);
                    }
                } else {
                    cout << "String Rejected" << endl;
                    return false;
                }
            } else {
                cout << "String Rejected" << endl;
                return false;
            }
        } else {
            cout << "String Rejected" << endl;
            return false;
        }
    }
    return true;
}

int main() {
    string input;
    cout << "Enter input string (terminate with $): ";
    cin >> input;
    input += '$'; // Append $ to indicate end of string
    bool result = parse(input);
    if (result) {
        cout << "String Accepted" << endl;
    } else {
        cout << "String Rejected" << endl;
    }
    return 0;
}
