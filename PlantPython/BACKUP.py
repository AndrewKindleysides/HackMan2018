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

pir = 8                             #Assign pin 8 to PIR
led = 16                            #Assign pin 10 to LED
GPIO.setup(pir, GPIO.IN)            #Setup GPIO pin PIR as input
GPIO.setup(led, GPIO.OUT)           #Setup GPIO pin for LED as output

try:
  while True:
   if GPIO.input(pir) == True:      #If PIR pin goes high, motion is detected
      print ("Motion Detected!")
      GPIO.output(led, True)        #Turn on LED
      time.sleep(4)                 #Keep LED on for 4 seconds
   GPIO.output(led, False)          #Turn off LED
   time.sleep(0.1)

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

                        except KeyboardInterrupt:           #Ctrl+c
                          pass                              #Do nothing, continue to finally

finally:
  GPIO.output(led, False)           #Turn off LED in case left on
  GPIO.cleanup()                    #reset all GPIO
  print ("Program ended")
