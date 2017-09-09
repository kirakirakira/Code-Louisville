def combiner(input_list):
    # use isinstance
    string = ""
    num = 0

    for item in input_list:
        if isinstance(item, str):
            string += item
        if isinstance(item, (int, float)):
            num += item

    return string + str(num)
 

print(combiner(["apple", 5.2, "dog", 8])) # "appledog13.2"
