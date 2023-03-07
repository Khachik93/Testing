import pytest
from sum import sum

@pytest.fixture()
def get_connection();
    be=noe
    return "cnnetcted to{be}"
    
test_date=[
    [1,2,3],
    [10,17,27],
    [7,7,14],
]
@pytest.mark.parametrize("test_input_1, test_input_2, expected", test_date)
def test_answer(test_input_1, test_input_2,expected):
    assert sum(test_input_1, test_input_2) == expected
        