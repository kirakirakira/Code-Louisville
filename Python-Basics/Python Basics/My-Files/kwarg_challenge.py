# Example:
# values = [{"name": "Michelangelo", "food": "PIZZA"}, {"name": "Garfield", "food": "lasagna"}]
# string_factory(values)
# ["Hi, I'm Michelangelo and I love to eat PIZZA!", "Hi, I'm Garfield and I love to eat lasagna!"]

def string_factory(values):
    template = "Hi, I'm {name} and I love to eat {food}!"
    new_list = []
    for item in values:
        new_list.append(template.format(**item))
    return new_list

values = [{"name": "Michelangelo", "food": "PIZZA"}, {"name": "Garfield", "food": "lasagna"}]
print(string_factory(values))
