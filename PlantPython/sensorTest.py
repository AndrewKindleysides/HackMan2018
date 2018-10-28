import RPi.GPIO as GPIO
import dht11
import time
import requests

#initialize GPIO 
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

#read data using pin 4
instance = dht11.DHT11(pin=4)


while True:

  result = instance.read()
  if result.is_valid():
    tempResponse = requests.get(url = "https://penelope-plant-api.herokuapp.com/temperature/{0}".format(result.temperature))
    humidResponse = requests.get(url = "https://penelope-plant-api.herokuapp.com/humidity/{0}".format(result.humidity)) 

    tempData = tempResponse.text
    humidData = humidResponse.text 
    print("{0}".format(tempData))
    print("{0}".format(humidData))

    print('Temperature: {0} C'.format(result.temperature))
    print('Humidity: {0} p'.format(result.humidity))
  else:
    print('Error: {0}'.format(result.error_code))
  time.sleep(2)

