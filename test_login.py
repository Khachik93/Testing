import pytest
from sum import sum
from conect import connect

@pytest.fixture(params=["B1", "B2"])
# @pytest.fixture()
def get_connection(request):
    return connect(request.param)
    # return connect("B1")
    
# test_date=[
#     [1,2,3],
#     [10,17,27],
#     [7,7,14],
# ]
# @pytest.mark.parametrize("test_input_1, test_input_2, expected", test_date)
# def test_answer(test_input_1, test_input_2,expected):
#     assert sum(test_input_1, test_input_2) == expected
        

def test_answer(get_connection):
    assert False, get_connection