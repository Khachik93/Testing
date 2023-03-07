class Car:
    def __init__(self):
        self.__wheels = None
        self.__engine = None
        self.__body = None
 
    def set_wheels(self, wheels):
        self.__wheels = wheels
 
    def set_engine(self, engine):
        self.__engine = engine
 
    def set_body(self, body):
        self.__body = body
 
    def __str__(self):
        return f"Wheels: {self.__wheels} \nEngine: {self.__engine} \nBody: {self.__body}"
 
 
class CarBuilder:
    def __init__(self):
        self.__car = Car()
 
    def add_wheels(self, wheels):
        self.__car.set_wheels(wheels)
 
    def add_engine(self, engine):
        self.__car.set_engine(engine)
 
    def add_body(self, body):
        self.__car.set_body(body)
 
    def get_car(self):
        return self.__car
 
 
class Director:
    @staticmethod
    def create_sports_car(builder):
        builder.add_wheels("Alloy Wheels")
        builder.add_engine("Turbocharged Engine")
        builder.add_body("Sports Body")
        return builder.get_car()
 
 
if __name__ == "__main__":
    builder = CarBuilder()
    sports_car = Director.create_sports_car(builder)
    print(sports_car)