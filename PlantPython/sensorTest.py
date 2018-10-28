import RPi.GPIO as GPIO
import dht11
import time
import requests

#initialize GPIO 
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

#read data using pin 14
instance = dht11.DHT11(pin=4)
while True: 
	result = instance.read()
	
	if result.is_valid():
		requests.get(url = "https://penelope-plant-api.herokuapp.com/temperature/{0}".format(result.temperature)) 
		data = response.text 
		print("{0}".format(data))
		print('Temperature: {0} C'.format(result.temperature))
	else:
		print('Error: {0}'.format(result.error_code))
	time.sleep(2)