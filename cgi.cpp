#include <iostream>
#include <fstream>
#include <string>
#include <cstdio> 
using namespace std; 

int main() {

    string buffer;
    ifstream fp("index.html");
    while (!fp.eof()) {
        getline(fp, buffer);
        cout << buffer << endl;
    }

}