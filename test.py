from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
import sys

sys.path.insert(0, '/home/student/workspace/appium/pages')


desired_cap = {
 "platformName": "android",
  "appium:platformVersion": "13",
  "appium:deviceName": "samsung A53",
  "appium:automationName": "appium",
  "appium:app": "/home/student/Downloads/ApiDemos-debug.apk"
}
driver = webdriver.Remote("http://localhost:4723/wd/hub", desired_cap)
driver.implicitly_wait(30)

access_ibility = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Access'ibility")
access_ibility.click()

provider = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Accessibility Node Provider")
querying = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Accessibility Node Querying")
service = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Accessibility Service")
view = driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Custom View")

assert provider.is_displayed() and querying.is_displayed() and service.is_displayed() and view.is_displayed()
provider.click()
provider_text=driver.find_element(AppiumBy.ACCESSIBILITY_ID, "Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares.")


text=provider_text.getText()
print(text)




