#include <iostream>
#include <vector>

using namespace std;

struct Process {
    int id;
    int arrivalTime;
    int burstTime;
    int completionTime;
    int waitingTime;
    int turnaroundTime;
    int responseTime;
};

// Function to calculate metrics and display results
void fcfs(vector<Process>& processes) {
    int currentTime = 0;
    float totalWaitingTime = 0;
    float totalTurnaroundTime = 0;
    float totalResponseTime = 0;

    cout << "Process Execution Order: ";
    for (int i = 0; i < processes.size(); ++i) {
        if (currentTime < processes[i].arrivalTime) {
            currentTime = processes[i].arrivalTime;
        }
        processes[i].completionTime = currentTime + processes[i].burstTime;
        processes[i].turnaroundTime = processes[i].completionTime - processes[i].arrivalTime;
        processes[i].waitingTime = processes[i].turnaroundTime - processes[i].burstTime;
        processes[i].responseTime = currentTime - processes[i].arrivalTime;

        cout << processes[i].id << " ";
        currentTime = processes[i].completionTime;

        totalWaitingTime += processes[i].waitingTime;
        totalTurnaroundTime += processes[i].turnaroundTime;
        totalResponseTime += processes[i].responseTime;
    }
    cout << endl;

    float avgWaitingTime = totalWaitingTime / processes.size();
    float avgTurnaroundTime = totalTurnaroundTime / processes.size();
    float avgResponseTime = totalResponseTime / processes.size();

    cout << "\nProcess Details:\n";
    cout << "ID\tAT\tBT\tCT\tWT\tTAT\tRT\n";
    for (const auto& process : processes) {
        cout << process.id << "\t" << process.arrivalTime << "\t" << process.burstTime << "\t"
             << process.completionTime << "\t" << process.waitingTime << "\t" << process.turnaroundTime << "\t"
             << process.responseTime << endl;
    }

    cout << "\nAverage Waiting Time: " << avgWaitingTime << endl;
    cout << "Average Turnaround Time: " << avgTurnaroundTime << endl;
    cout << "Average Response Time: " << avgResponseTime << endl;
}

int main() {
    int n;
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

    fcfs(processes);

    return 0;
}
