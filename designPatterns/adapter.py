import json
import xmltodict

class DataProvider:

    def get_xml_data(self):
        return """
            <employees>
                <employee>
                    <name>Jordan Raychev</name>
                    <role>Dev</role>
                </employee>
            </employees>
        """

class AdapterXMLToJson:

    def __init__(self, adaptee):
        self.data = adaptee.get_xml_data()

    def convert(self):
        return json.dumps(xmltodict.parse(self.data))
