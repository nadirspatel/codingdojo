# lets sort integers low to high in array
def bubbleSort(arr):
    for j in range(len(arr)-1):
        for i in range(len(arr)-1-j):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
    print arr
bubbleSort([1,5,7,4,2,8,3,6])

