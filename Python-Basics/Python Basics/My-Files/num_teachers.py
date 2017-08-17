def num_teachers(dict_teachers):
    # dict_teachers is a dictionary of Treehouse teachers and their courses
    # return an integer for how many teachers are in the dict_teachers
    # {'Andrew Chalkley': ['jQuery Basics', 'Node.js Basics'],
    #  'Kenneth Love': ['Python Basics', 'Python Collections']}
    teachers = dict_teachers.keys()
    return len(teachers)

def num_courses(dict_teachers):
    # return the total number of courses for all of the teachers
    total_num_courses = 0
    for teacher in dict_teachers.keys():
        for course in dict_teachers[teacher]:
            total_num_courses += 1
    return total_num_courses

def courses(dict_teachers):
    list_courses = []
    for teacher, courses in dict_teachers.items():
        for course in courses:
            if course not in list_courses:
                list_courses.append(course)
    return(list_courses)

def most_courses(dict_teachers):
    # return the name of the teacher with the most courses
    max_courses = 0
    max_teacher = ''
    teachers_num_courses = [[teacher, len(courses)] for teacher, courses in dict_teachers.items()]
    for pair in teachers_num_courses:
        if pair[1] > max_courses:
            max_teacher = pair[0]
            max_courses = pair[1]
    return max_teacher

def stats(dict_teachers):
    # return a list of lists where first item in each inner list is teacher's name
    # and second items is number of courses
    teachers_num_courses = [[teacher, len(courses)] for teacher, courses in dict_teachers.items()]
    return teachers_num_courses
    
print(stats({'Andrew Chalkley': ['jQuery Basics', 'Node.js Basics'],
        'Kenneth Love': ['Python Basics', 'Python Collections', 'Django']}))
