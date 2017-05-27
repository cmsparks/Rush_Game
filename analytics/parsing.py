import json
from pprint import pprint
import numpy
import matplotlib.pyplot as plt
data_file = open('pseudo_data/players.json')
data = json.load(data_file)
data = data["data"]

user_number = len(data)

user_names = []
for i in range(0,user_number):
	user_names.append(data[i]["name"])

def function(n):
	if n==True:
		return 1
	if n==False:
		return 0

def rightorwrong(user_place):
	name=str(data[user_place]["name"])
	index=data[user_place]["current_index"]
	responselist=data[user_place]["responses"]

	responselist=list(map(function, responselist))
	x_list = []
	for i in range(1, index+1):
		x_list.append(i)

	plt.scatter(x_list, responselist)
	plt.plot(x_list, responselist, 'r-')
	
	plt.show()



rightorwrong(1)
