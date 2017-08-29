def covers(topics_set):
    # return a list of courses from courses
    # where the supplied set and the course's value
    # overlap
    COURSES = {
    "Python Basics": {"Python", "functions", "variables",
                      "booleans", "integers", "floats",
                      "arrays", "strings", "exceptions",
                      "conditions", "input", "loops"},
    "Java Basics": {"Java", "strings", "variables",
                    "input", "exceptions", "integers",
                    "booleans", "loops"},
    "PHP Basics": {"PHP", "variables", "conditions",
                   "integers", "floats", "strings",
                   "booleans", "HTML"},
    "Ruby Basics": {"Ruby", "strings", "floats",
                    "integers", "conditions",
                    "functions", "input"}
                    }
    courses_list = []
    for course, topics in COURSES.items():
        if topics.intersection(topics_set):
            courses_list += [course]
    return courses_list

def covers_all(topics_set):
    # return a list of courses from courses
    # where the supplied set and the course's value
    # overlap
    COURSES = {
    "Python Basics": {"Python", "functions", "variables",
                      "booleans", "integers", "floats",
                      "arrays", "strings", "exceptions",
                      "conditions", "input", "loops"},
    "Java Basics": {"Java", "strings", "variables",
                    "input", "exceptions", "integers",
                    "booleans", "loops"},
    "PHP Basics": {"PHP", "variables", "conditions",
                   "integers", "floats", "strings",
                   "booleans", "HTML"},
    "Ruby Basics": {"Ruby", "strings", "floats",
                    "integers", "conditions",
                    "functions", "input"}
                    }
    courses_list = []
    for course, topics in COURSES.items():
        if topics.issuperset(topics_set):
            courses_list += [course]
    return courses_list

print(covers({"Python"}))
print(covers({"PHP", "HTML"}))
print(covers({"loops"}))

print(covers_all({"conditions", "input"}))
