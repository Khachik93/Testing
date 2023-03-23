from abc import ABC, abstractmethod

class Bank(ABC):
    @abstractmethod
    def loan_repayment(self):
        pass

class Unibank(Bank):
    def loan_repayment(self):
        print("payment is made")        

class Proxy(Bank):
    def __init__(self, user):
        self.user = user

    def check_access(self):
        return True    

    def loan_repayment(self):
        if self.check_access():
            print("ok")   

    


convers_bank = Unibank()
proxy = Proxy(convers_bank)
proxy.loan_repayment()       