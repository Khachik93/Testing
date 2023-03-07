import pytest
import requests

def test_get_user():
    respons = requests.get('https://demoapp-testing.herokuapp.com/docs#/Users')
    assert respons.status_code == 200

test_register_data = [
    ("Khachik", "khachik@gmail.com", "12345"),
]

@pytest.mark.parametrize("username, email, password", test_register_data)
def test_register_user( "Khachik", khachik@gmail.com", 12345):
    response = register_user(username, email, password)
    assert response.status_code == expected_status
    assert response.json() == 200