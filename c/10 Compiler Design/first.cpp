/*
Problem No : 05
Problem Name: Write a C++ program for FIRST.
Problem Statement: A set of production rules where each rule is in the form X -> α, where X is a non-terminal symbol and α is a string of terminals and/or non-terminals separated by spaces. Each production rule is separated by a newline character.
*/

#include <iostream>

using namespace std;

map<char, set<char>> computeFIRST(const map<char, string>& productions) {
    map<char, set<char>> FIRST;
    for (const auto& [non_terminal, production] : productions) {
        FIRST[non_terminal];
        for (char symbol : production) {
            if (islower(symbol) || symbol == 'e') {
                FIRST[non_terminal].insert(symbol);
                break;
            }
        }
    }
    bool changes = true;
    while (changes) {
        changes = false;
        for (const auto& [non_terminal, production] : productions) {
            for (char symbol : production) {
                if (isupper(symbol)) {
                    for (char terminal : FIRST[symbol]) {
                        if (terminal != 'e' && !FIRST[non_terminal].count(terminal)) {
                            FIRST[non_terminal].insert(terminal);
                            changes = true;
                        }
                    }
                    if (!FIRST[symbol].count('e')) {
                        break;
                    }
                } else {
                    if (symbol != 'e' && !FIRST[non_terminal].count(symbol)) {
                        FIRST[non_terminal].insert(symbol);
                        changes = true;
                    }
                    break;
                }
            }
        }
    }
    return FIRST;
}

int main() {
    map<char, string> productions;
    string line;
    cout << "Enter production rules (X -> α, separated by newline. Use 'e' for epsilon production):" << endl;
    cout << "Type 'end' to stop input:" << endl;
    while (true) {
        getline(cin, line);
        if (line == "end") {
            break;
        }
        char non_terminal;
        string production;
        istringstream iss(line);
        iss >> non_terminal >> production;
        productions[non_terminal] = production;
    }
    cout << "\nFIRST sets:" << endl;
    auto FIRST = computeFIRST(productions);
    for (const auto& [non_terminal, first_set] : FIRST) {
        cout << "FIRST(" << non_terminal << ") = { ";
        for (char terminal : first_set) {
            cout << terminal << " ";
        }
        cout << "}" << endl;
    }
    return 0;
}
