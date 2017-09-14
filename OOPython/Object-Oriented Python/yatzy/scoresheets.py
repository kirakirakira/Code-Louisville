class YatzyScoresheet:
    def score_ones(self, hand):
        return sum(hand.ones)

    def _score_set(self, hand, set_size):
        scores = [0]
        for worth, count in hand._sets.items():
            if count == set_size:
                scores.append(worth*set_size)
        return max(scores)

    def score_one_pair(self, hand):
        return self._score_set(hand, 2)

    def score_chance(self, hand):
        set_hands = hand._sets
        score = 0
        for key, value in set_hands.items():
            score += key * value
        return score

    def score_yatzy(self, hand):
        set_hands = hand._sets
        five_dice = 0
        for key, value in set_hands.items():
            if value > 5 or value == 5:
                five_dice += 1
        if five_dice > 0:
            return 50
        else:
            return 0

from hands import YatzyHand
from dice import D6
hand = YatzyHand()
three = D6(value=3)
four = D6(value=4)
one = D6(value=1)
hand[:] = [one, three, three, four, four, four, three, three, three]
print(YatzyScoresheet().score_chance(hand))
print(YatzyScoresheet().score_yatzy(hand))
