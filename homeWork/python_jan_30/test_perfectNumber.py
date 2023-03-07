import pytest
from perfectNumber import perfectNumber

def test_answer():
    assert perfectNumber(6) == True

def test_always_fails():
     assert perfectNumber(8) == True