/*
Problem No : 06
Problem Name: Write a C++ program for Follow.
Problem Statement: A set of production rules where each rule is in the form X -> α, where X is a non-terminal symbol and α is a string of terminals and/or non-terminals separated by spaces. Each production rule is separated by a newline character.

*/

#include <bits/stdc++.h>

using namespace std;

map<char, set<char>> computeFOLLOW(const map<char, string>& productions, char start_symbol) {
    map<char, set<char>> FOLLOW;
    FOLLOW[start_symbol].insert('$');

    bool changes = true;
    while (changes) {
        changes = false;
        for (const auto& [non_terminal, production] : productions) {
            for (size_t i = 0; i < production.size(); ++i) {
                if (isupper(production[i])) {
                    char symbol = production[i];
                    if (i + 1 < production.size() && isupper(production[i + 1])) {
                        char next_symbol = production[i + 1];
                        for (char terminal : FOLLOW[symbol]) {
                            if (terminal != 'e' && !FOLLOW[next_symbol].count(terminal)) {
                                FOLLOW[next_symbol].insert(terminal);
                                changes = true;
                            }
                        }
                        if (FOLLOW[symbol].count('e')) {
                            for (char terminal : FOLLOW[non_terminal]) {
                                if (!FOLLOW[next_symbol].count(terminal)) {
                                    FOLLOW[next_symbol].insert(terminal);
                                    changes = true;
                                }
                            }
                        }
                    }
                    if (i == production.size() - 1 || (i + 1 < production.size() && FOLLOW[symbol].count('e'))) {
                        for (char terminal : FOLLOW[non_terminal]) {
                            if (!FOLLOW[symbol].count(terminal)) {
                                FOLLOW[symbol].insert(terminal);
                                changes = true;
                            }
                        }
                    }
                }
            }
        }
    }
    return FOLLOW;
}

int main() {
    map<char, string> productions;
    string line;
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
    char start_symbol;
    cin >> start_symbol;
    auto FOLLOW = computeFOLLOW(productions, start_symbol);
    for (const auto& [non_terminal, follow_set] : FOLLOW) {
        cout << "FOLLOW(" << non_terminal << ") = { ";
        for (char terminal : follow_set) {
            cout << terminal << " ";
        }
        cout << "}" << endl;
    }
    return 0;
}
