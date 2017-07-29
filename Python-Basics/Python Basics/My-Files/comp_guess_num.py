import random
import time

def game():
    print("Think of a number between 1 and 10.")
    time.sleep(4)
    guesses = []
    a = 1
    b = 10
    guess = random.randint(a, b)

    while len(guesses) < 5:
        # print("Guess is ", guess)
        action = input("Is your number {}? Type 'high' for too high, 'low' for too low, or 'yes' for I guessed it. >> ".format(guess))

        if action.lower() == "yes":
            print("Yay, I guessed your number!")
            break

        elif action.lower() == "high" and guess != 1:
            # print("range is ", a, ' ', guess-1)
            b = guess-1
            guess = random.randint(a,guess-1)
            # print("guess is ", guess)

            # print("b is now ", b)

        elif action.lower() == "low" and guess !=10:
            # print("range is ", guess+1,' ', b)
            a = guess+1
            guess = random.randint(guess+1, b)
            # print("guess is ", guess)
            # print("a is now ", a)

        guesses.append(guess)

    else:
        print("I couldn't guess it, you win!")

    play_again = input("Do you want to play again? Y/n ")

    if play_again.lower() != 'n':
        print('-----------NEW GAME--------------')
        game()
    else:
        print("Bye!")

game()
