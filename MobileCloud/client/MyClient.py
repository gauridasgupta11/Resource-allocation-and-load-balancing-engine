'''
Created on Nov 1, 2014

@author: sweny
'''
from random import randint



import multiprocessing
import logging
import urllib2,json

def getRandomCPU():
 randCPU = randint(1, 2)
 if randCPU == 1:
    cpuType = "T1"
 elif randCPU == 2:
    cpuType = "T2"
 return cpuType


def getRandomStorage():
 randStorage = randint(8, 32)
 return randStorage

def getRandomMem():
 randMem = randint(1, 4)
 if randMem == 1:
    memVal = 2
 elif randMem == 2:
    memVal = 4
 elif randMem == 3:
    memVal = 8
 elif randMem == 4:
    memVal = 16
 return memVal

def generateRequest():
    memResource = getRandomMem()
    storageResource = getRandomStorage()
    cpuResource = getRandomCPU()
    print "Memory :"+str(memResource)+" Storage : "+str(storageResource)+" CPUREsource: "+cpuResource
    location = "37.335187,-121.881072"
    url = 'http://localhost:8081/requestHandler.js'
    postdata = {'location': location,'memory':memResource,'storage':storageResource,'CPU':cpuResource} 
    req = urllib2.Request(url)
    req.add_header('Content-Type','application/json')
    data = json.dumps(postdata)

    response = urllib2.urlopen(req,data)
    data = response.read()
    print data
    
    

if __name__ == '__main__':
    
    for i in range(25):
        
        multiprocessing.log_to_stderr(logging.INFO)
        p = multiprocessing.Process(target=generateRequest)
        p.start()
        p.join()





