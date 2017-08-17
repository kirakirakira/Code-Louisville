def word_count(str):
    new_dict = {}
    for word in str.split():
        if word.lower() not in new_dict:
            new_dict[word.lower()] = 1
        else:
            new_dict[word.lower()] += 1
    return new_dict

print(word_count("I do not like it Sam I Am"))
print(word_count("Kira is as Kira does but not as I do"))
