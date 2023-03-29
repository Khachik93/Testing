from __future__ import annotations                             
from abc import ABC, abstractmethod

class Cars(ABC):

    @abstractmethod
    def create(self):
        pass

    def start(self):
        print("Car is starting.")

    def stop(self):
        print("Car is stoped.")

    def drive(self):
        print("Driving car.")

class Bmw(Cars):

    def create(self):
        print("Creating car ")

class Mercedes(Cars):

    def create(self):
        print("Creating car")

class CarFactory(ABC):

    @abstractmethod
    def create_car(self):
        pass

class BmwCar(CarFactory):

    def create_car(self):
        return Bmw()

class MercedesCar(CarFactory):

    def create_pizza(self):
        return Mercedes()

if __name__ == '__main__':
    
    bmw_car_factory = BmwCar()
    bmw_car = bmw_car_factory.create_car()
    bmw_car.start()
    bmw_car.stop()
    bmw_car.drive()

    print()

  