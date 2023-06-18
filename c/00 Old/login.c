#include <stdio.h>

struct login {
    char fname[100];
    char lname[20];
    char username[20];
    char password[20];
};

registe() {
    FILE *log;
    log = fopen("login.txt", "w");
    struct login l;

    printf("Enter First Name: ");
    scanf("%s", l.fname);
    printf("Enter Last Name: ");
    scanf("%s", l.lname);

    printf("Enter UserName: ");
    scanf("%s", l.username);
    printf("Enter UserName: ");
    scanf("%s", l.password);
    fwrite(&l, sizeof(l), 1, log);

    fclose(log);

    printf("\n\nYour User Name is: ");
    printf("Now login with UserID and Password\n");
    printf("\Press any key to continue...");
    getch();
    system("CLS");
    login();
}

login() {
    char username[200], password[20];
    FILE *log;
    log=fopen("login.txt", "r");
    struct login l;
    printf("UserID: ");
    scanf("%s", &username);
    printf("Password: ");
    scanf("%s", &password);

    while(fread(&l, sizeof(l), 1, log)) {
        if(strcmp(username, l.username) == 0 && strcmp(password, l.password) == 0) {
            printf("Successful login\n");
        } else {
            printf("Please Enter Correct UserName or Password");
        }
    }

    fclose(log);
}

int main() {
    int cho;

    printf("Press '1' for register. \n Press '2' for login \n\n");
    scanf("%d", &cho);

    if(cho == 1) {
        system("CLS");
        registe();
    } else if (cho == 2) {
        system("CLS");
        login();
    }
}
