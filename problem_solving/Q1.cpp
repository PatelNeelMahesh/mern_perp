/* 1) Given an array of size N-1 such that it only contains distinct integers in the range of 
1 to N. Find the missing element. */

#include <stdio.h>
#include <iostream> 

int findMissingElement (int N , int A[]){
    
    int totalSum = N * (N + 1) / 2 ;
    int Sum = 0;

    for(int i=0; i<N; i++){
        Sum += A[i];
    }

    int missingElement = totalSum - Sum ;
    return missingElement;
    
}

int main(int argc, char const *argv[]){
    int N;
    std:: cin >> N;

    int* A = new int [N-1];
    for(int i=0; i<N-1; i++){
        std:: cin >> A[i];
    }

    int missingElement = findMissingElement(N , A);
    std:: cout << "Missing Element" << missingElement << std:: endl;
    return 0;
}
