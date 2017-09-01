# EXAMPLES:
# move((1, 1, 10), (-1, 0)) => (0, 1, 10)
# move((0, 1, 10), (-1, 0)) => (0, 1, 5)
# move((0, 9, 5), (0, 1)) => (0, 9, 0)

def move(player, direction):
    x, y, hp = player

    move_x, move_y = direction

    if x + move_x < 0 or y + move_y < 0 or x + move_x > 9 or y + move_y > 9:
        hp -= 5
    else:
        x = x + move_x
        y = y + move_y
    return x, y, hp

print(move((1, 1, 10), (-1, 0))) #  => (0, 1, 10)
print(move((0, 1, 10), (-1, 0))) # => (0, 1, 5)
print(move((0, 9, 5), (0, 1))) # => (0, 9, 0)
