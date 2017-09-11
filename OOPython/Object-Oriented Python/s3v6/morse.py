class Letter:
    def __init__(self, pattern=None):
        self.pattern = pattern

    def __iter__(self):
        yield from self.pattern

    def __str__(self):
        output = []
        for blip in self:
            if blip == '.':
                output.append('dot')
            else:
                output.append('dash')
        return '-'.join(output)

    @classmethod
    def from_string(cls, dash_dot):
        output = []
        for blip in dash_dot.split('-'):
            if blip.lower() == 'dash':
                output.append('-')
            else:
                output.append('.')
        print(output)
        return cls(output)

class S(Letter):
    def __init__(self):
         pattern = ['.', '.', '.']
         super().__init__(pattern)
