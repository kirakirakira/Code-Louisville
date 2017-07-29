import random

def game():
    # generate random number between 1 and 10
    secret_number = random.randint(1, 10)
    guesses = []

    while len(guesses) < 5:
        try:
            # get a number guess from player
            guess = int(input("Guess a number between 1 and 10: "))

        except ValueError:
            print("That's not an integer!")

        else:
            # compare guess to secret number
            if guess == secret_number:
                print("You got it! My number was {}".format(secret_number))
                break
            elif guess > secret_number:
                print("Too high!")
            elif guess < secret_number:
                print("Too low!")
            guesses.append(guess)

    else:
        print("You didn't get it! My number was {}".format(secret_number))

    play_again = input("Do you want to play again? Y/n ")

    if play_again.lower() != 'n':
        print('-----------NEW GAME--------------')
        game()
    else:
        print("Bye!")

game()
