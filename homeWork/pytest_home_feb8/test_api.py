import pytest
from swagger_coverage_py.reporter import CoverageReporter
from requests.auth import HTTPBasicAuth


@pytest.fixture(scope="session", autouse=True)
def setup_swagger_coverage():
    reporter = CoverageReporter(api_name="FastAPI", host="https://demoapp-testing.herokuapp.com/docs#/Users/get_users_users__get")
    reporter.cleanup_input_files()
    reporter.setup("/api/v1/resources/my_project/doc/swagger.json", auth=HTTPBasicAuth("username", "password"))

    yield
    reporter.generate_report()