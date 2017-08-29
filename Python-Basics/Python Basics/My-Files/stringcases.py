def stringcases(str):
    # return a tuple of different string formats
    # all uppercase
    # all lowercase
    # titlecased (first letter of each word is capitalized)
    # reversed

    return (str.upper(), str.lower(), str.title(), str[::-1])

print(stringcases("Kira is super aweSOME."))
