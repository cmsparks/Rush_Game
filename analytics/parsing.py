import json
from pprint import pprint
import numpy as np
import matplotlib.pyplot as plt

data_file = open('pseudo_data/players.json')
data = json.load(data_file)
data = data["data"]
user_number = len(data)
numquestions=10
user_names = []
for i in range(0,user_number):
	user_names.append(data[i]["name"])

def function(n):
	if n==True:
		return 1
	if n==False:
		return 0

def userplot(user_place):
	"""Plots the results of a single user. user_place is a number which is their place in the array"""
	name=str(data[user_place]["name"])

	index=data[user_place]["current_index"]
	responselist=data[user_place]["responses"]
	responselist=list(map(function, responselist))

	x_list = []
	for i in range(1, index+1):
		x_list.append(i)

	plt.scatter(x_list, responselist)
	plt.plot(x_list, responselist, 'r-', label='{a}s score'.format(a=name))
	plt.show()

def wholeclassplot():
	"""Plots the results of the whole class"""
	for user_place in range(0,user_number):
		name=str(data[user_place]["name"])
		index=data[user_place]["current_index"]
		responselist=data[user_place]["responses"]
		responselist=list(map(function, responselist))
		x_list = []
		for i in range(1, index+1):
			x_list.append(i)
		plt.scatter(x_list, responselist)
		plt.plot(x_list, responselist)
	plt.show()

def averagesclass():
	listofresults=[]
	for i in range(0,user_number):
		current=list(map(function, data[i]["responses"]))
		a=len(current)
		for i in range(0,numquestions-a):
			current.append(0)

		listofresults.append(current)

	print(listofresults)

	results= map(sum, zip(*listofresults))
	print(results)
	x_values=[]
	for i in range(1,numquestions+1):
		x_values.append(i)

	plt.scatter(x_values, results)
	plt.plot(x_values, results)
	plt.show()
