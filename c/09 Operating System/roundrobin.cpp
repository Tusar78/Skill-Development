#include <iostream>
#include <vector>
#include <queue>

using namespace std;

struct Process {
    int id;
    int arrivalTime;
    int burstTime;
    int remainingTime;
    int completionTime;
    int waitingTime;
    int turnaroundTime;
    int responseTime;
};

// Function to calculate metrics and display results for Round Robin
void roundRobin(vector<Process>& processes, int quantum) {
    int n = processes.size();
    queue<Process> readyQueue;
    int currentTime = 0;
    int remainingProcesses = n;
    int quantumTime = quantum;

    for (int i = 0; i < n; ++i) {
        processes[i].remainingTime = processes[i].burstTime;
    }

    while (remainingProcesses > 0) {
        for (int i = 0; i < n; ++i) {
            if (processes[i].arrivalTime <= currentTime && processes[i].remainingTime > 0) {
                if (processes[i].remainingTime <= quantumTime) {
                    currentTime += processes[i].remainingTime;
                    processes[i].remainingTime = 0;
                    processes[i].completionTime = currentTime;
                    processes[i].turnaroundTime = processes[i].completionTime - processes[i].arrivalTime;
                    processes[i].waitingTime = processes[i].turnaroundTime - processes[i].burstTime;
                    processes[i].responseTime = currentTime - processes[i].arrivalTime;
                    remainingProcesses--;
                } else {
                    currentTime += quantumTime;
                    processes[i].remainingTime -= quantumTime;
                }
                readyQueue.push(processes[i]);
            }
        }
        if (!readyQueue.empty()) {
            Process currentProcess = readyQueue.front();
            readyQueue.pop();
            readyQueue.push(currentProcess);
        } else {
            currentTime++;
        }
    }

    float totalWaitingTime = 0;
    float totalTurnaroundTime = 0;
    float totalResponseTime = 0;

    cout << "Process Details:\n";
    cout << "ID\tAT\tBT\tCT\tWT\tTAT\tRT\n";
    for (const auto& process : processes) {
        cout << process.id << "\t" << process.arrivalTime << "\t" << process.burstTime << "\t"
             << process.completionTime << "\t" << process.waitingTime << "\t" << process.turnaroundTime << "\t"
             << process.responseTime << endl;
        totalWaitingTime += process.waitingTime;
        totalTurnaroundTime += process.turnaroundTime;
        totalResponseTime += process.responseTime;
    }

    cout << "\nAverage Waiting Time: " << totalWaitingTime / n << endl;
    cout << "Average Turnaround Time: " << totalTurnaroundTime / n << endl;
    cout << "Average Response Time: " << totalResponseTime / n << endl;
}

int main() {
    int n, quantum;
    cout << "Enter the number of processes: ";
    cin >> n;

    vector<Process> processes(n);

    cout << "Enter arrival time and burst time for each process:\n";
    for (int i = 0; i < n; ++i) {
        cout << "Process " << i + 1 << ":\n";
        processes[i].id = i + 1;
        cout << "Arrival Time: ";
        cin >> processes[i].arrivalTime;
        cout << "Burst Time: ";
        cin >> processes[i].burstTime;
    }

    cout << "Enter the time quantum: ";
    cin >> quantum;

    roundRobin(processes, quantum);

    return 0;
}
