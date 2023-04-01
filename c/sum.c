#include <stdio.h>

int main() {
  int n;
  double x;
  x = 10.45;
  n = (int) x;

  printf("Value of n is %d\n", n);
  printf("Value of x is %.2lf\n", x);
  return 0;
}
