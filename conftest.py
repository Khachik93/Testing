import pytest
import requests

@pytest.mark.parametrize()
def test_get_user():
    respons = requests.get('https://demoapp-testing.herokuapp.com/docs#/Users')
    return respons


@pytest.fixture(scope="module", autouse=True)
def test_register_user(username, email, password):
    url = "https://demoapp-testing.herokuapp.com/users/"
    data = {"fullname": username, "email": email, "password": password}
    response = requests.post(url, json=data)
    return response

