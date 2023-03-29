import copy

class Prototype:
    def clone(self):
        return copy.deepcopy(self)

class Car(Prototype):
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def __str__(self):
        return f"{self.name} ({self.color})"


mercedes = Car("cls","bleck")
bmw = mercedes.clone()

print(mercedes)
print(bmw)
