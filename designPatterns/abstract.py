from __future__ import annotations
from abc import ABC, abstractmethod

class AbstractFactory(ABC):
    def create_car_sport(self):
        pass

    def create_car_sedan(self):
        pass    

        
class Mercedes(AbstractFactory):
        def create_car_sport(self):
            return Mercedes_sport()

        def create_car_sedan(self):
            return Mercedes_sedan()    

class AbstractProductA(ABC):
         def useful_function_a(self):
            pass        

class Mercedes_sport(AbstractProductA):
            def useful_function_a(self):
                return "Mercedes sport"    

def client_code(factory: AbstractFactory):
    product_a = factory.create_car_sport()
    print("sport car")


client_code(Mercedes())      