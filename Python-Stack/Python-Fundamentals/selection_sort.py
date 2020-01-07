# Selection Sort divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

def selectionSort(arr):
    for i in arr:
        minimum = arr[i]
        newArr = []
        if arr[i+1] < minimum:
            minimum = arr[i]
            newArr.append(arr[i])
    print newArr
selectionSort([3,5,1,9,2])
    