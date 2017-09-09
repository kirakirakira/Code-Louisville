import random

total_eq = 0
print("Welcome to the Code Louisville calculator!!!")
#loop until you get tired
while True:

    #array that stores results from each equation
    results = []
    num_loops = 1

    #Ask the user for their choice
    choice = input("\nWould you like to enter your own equation (Enter 1), randomly generate equations (Enter 2), or leave (Enter 0): ")
    if choice == '1': #choose user input
        while True: #this is used to loop until the user inputs valid content
            try:
                number_one = int(input("First number: "))
                break
            except:
                print("Sorry, that wasn't a valid number.")
                continue
        while True:
            try:
                number_two = int(input("Second number: "))
                break
            except:
                print("Sorry, that wasn't a valid number.")
                continue
        while True:
            operator = input("Operator ('+', '-', '*', '/', '%'): ")
            if operator not in ['+', '-', '*', '/', '%']:
                print("Sorry, that isn't a valid operator.")
            else:
                break
    elif choice == '2': #choose to auto run 10 equations
        num_loops = 10
    elif choice == '0': #exit program
        break
    else:
        print("Sorry, that input wasn't valid.")
        continue

    #loop for either 1 iteration or 10 iterations
    for i in range(num_loops):

        #declare and initialize the two numbers and the operator
        if choice == '2':
            number_one = int(random.random() * 99 + 1)
            number_two = int(random.random() * 99 + 1)
            operator = str(int(random.random() * 5 + 1))

        #dictionary that holds the equation and results
        temp_result = {'num1': number_one, 'num2': number_two, 'operator': '', 'result': 0}

        #if-else chain to determine what operator should be used
        if operator == '1' or operator == '+': #addition
            temp_result['result'] = number_one + number_two
            temp_result['operator'] = '+'
        elif operator == '2' or operator == '-': #subtraction
            temp_result['result'] = number_one - number_two
            temp_result['operator'] = '-'
        elif operator == '3' or operator == '*': #multiplication
            temp_result['result'] = number_one * number_two
            temp_result['operator'] = '*'
        elif operator == '4' or operator == '/': #division
            temp_result['result'] = number_one / number_two
            temp_result['operator'] = '/'
        elif operator == '5' or operator == '%': #modulus
            temp_result['result'] = number_one % number_two
            temp_result['operator'] = '%'

        #append the temp result to the results array
        results.append(temp_result)

        #increase the total counter by 1
        total_eq += 1

    #loop through the results array and print out each line
    for r in results:
        print(format(r['num1'], '02d'), r['operator'], format(r['num2'], '02d'), '=', r['result'])

print("\nTotal number of equations: ", total_eq)
