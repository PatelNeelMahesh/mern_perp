1)Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element. 
Answer:
#include <iostream>
using namespace std;
int minimumElement(int a[],int n){

  int  total = ((n ) * (n + 1) )/ 2;
    for (int    i = 0; i < n-1; i++){
        total -= a[i];
    }
    return total;
}
int main() {
    int n;
    cin>>n;
    int a[n-1];
    for(int i=0;i<n-1;i++){
        cin>>a[i];
    }
    cout<<minimumElement(a,n);

    return 0;
}

2) Given two strings denoting non-negative numbers s1 and s2. Calculate the sum of s1 and s2.
Answer:
#include <iostream>
using namespace std;

string addString(string s1, string s2) {
    string res = "";
    int c = 0, i = s1.size() - 1, j = s2.size() - 1;
    while (i >= 0 || j >= 0 || c == 1) {
        if (i >= 0) {
            c += s1[i--] - '0';
        } else {
            c += 0;
        }
        if (j >= 0) {
            c += s2[j--] - '0';
        } else {
            c += 0;
        }
        res = char(c % 10 + '0') + res;
        c /= 10;
    }

    return res;
}
int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << addString(s1, s2);
    return 0;
}


3) Klaus Mikaelson and his daughter Hope were arguing about who is the smartest person in the family. Klaus who is a world-known Computer Engineer asked Hope who has not yet completed her college to write a program to sort the given array in ascending order. Can you help Hope?
Answer:
#include <iostream>
using namespace std;

void insertionSort(int arr[],int n){
    for(int i=1;i<n;i++){
        int key=arr[i];
        int j=i-1;
        while(key<arr[j]&&j>=0){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
}

int main() {
	int n;
	cin>>n;
	int arr[n];
	for(int i=0;i<n;i++){
	    cin>>arr[i];
	}
	insertionSort(arr,n);
	for(int i=0;i<n;i++){
	    cout<<arr[i]<<" ";
	}
	return 0;
}

