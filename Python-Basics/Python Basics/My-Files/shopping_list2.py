def show_list():
    print("Items in your shopping list are: ")
    for item in shopping_list:
        print(item)

def add_item(new_item):
    if new_item not in shopping_list:
        shopping_list.append(new_item)
        print("Added {}. List now has {} items.".format(new_item, len(shopping_list)))
    else:
        print("Already in your list.")

def help():
    # print help instructions
    print("What should we pick up at the store?")
    print("Enter 'DONE' to stop adding items.")
    print("Enter 'HELP' to repeat these instructions.")
    print("Enter 'SHOW' to show current list.")

def main():
    # Empty shopping list
    global shopping_list
    shopping_list = []

    help()

    while True:
        # ask for new items
        new_item = input("> ")

        # be able to quit the app
        if new_item == "DONE":
            break

        # display instructions again
        elif new_item == "HELP":
            help()

        # show current list
        elif new_item == "SHOW":
            show_list()

        # add new items to our list
        else:
            add_item(new_item)

    show_list()

main()
    
