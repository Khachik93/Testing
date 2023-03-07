import pytest
from fibonacci import Fibonacci

def test_answer():
    assert Fibonacci(4) == 2

def test_always_fails():
     assert Fibonacci(1) == 55