#include <stdio.h>
#include <stdlib.h>

int main () {
    FILE * fp = fopen ("index.html", "r");
    char ch = fgetc (fp);
    while (ch != EOF) {
        fputc (ch, stdout);
        ch = fgetc (fp);
    }
} 