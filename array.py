def custom_sorting(array):
    sorted_array=[]
    length = len(array)
    for i in range(1,length):
        length = len(array)
        if i%2!=0:
            sorted_array.append(max(array))
            array.remove(max(array))
        else:
            sorted_array.append(min(array))
            array.remove(min(array))
    sorted_array+=array
    return sorted_array

test_case = [2,4,6,8,10]
##for manual input
#n=int(input("\n Enter the number of elements : "))
#test_case=[]
#for i in range(0,n):
#    element=int(input("\n Enter the element:"))
#    test_case.append(element)


print("\n After Sorting \n\n",custom_sorting(test_case))
