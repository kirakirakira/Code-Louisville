def combo(iter1, iter2):
    # combo([1, 2, 3], 'abc')
    # Output:
    # [(1, 'a'), (2, 'b'), (3, 'c')]
    new_list = []
    for item1 in list(iter1):
        for item2 in list(iter2):
            new_list += [(item1, item2)]
    return new_list

print(combo([1,2,3], 'abc'))
print(combo(('a', 2, 56), [6, 'b', 80]))
