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
        dash_dot_list = dash_dot.split('-')
        list_pattern = []
        for blip in dash_dot_list:
            if (blip.lower() == 'dash'):
                list_pattern.append('_')
            elif (blip.lower() == 'dot'):
                list_pattern.append('.')
            else:
                pass
        return cls(list_pattern)

class S(Letter):
    def __init__(self):
        pattern = ['.', '.', '.']
        super().__init__(pattern)
