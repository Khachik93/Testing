from abc import ABC, abstractmethod
class Bank(ABC):
    def varki_marum(self):
        pass

class Acba(Bank):
    def varki_marum(self):
        print("varki marum")

class Proxy(Bank):


    def __init__(self, real_bank: Bank) -> None:
        self._real_bank = real_bank

    def check_access(self) -> bool:
        print("Proxy: Checking access prior to firing a real request.")
        return True

    def varki_marum(self):
        if self.check_access():
            print("pass")
            self._real_bank.varki_marum()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    acba = Acba()
    acba.varki_marum()

    vtb = Acba()
    proxy = Proxy(vtb)
    proxy.varki_marum()