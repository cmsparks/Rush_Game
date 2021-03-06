import json, simplejson
from pprint import pprint
import numpy as np
import matplotlib.pyplot as plt
from collections import OrderedDict

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

	plt.plot(x_list, responselist, 'r-')
	plt.scatter(x_list, responselist)
	plt.xticks(list(range(1, numquestions)))
	plt.xlabel(str(name), fontsize=20)
	plt.ylim(-0.25, 1.25)
	plt.yticks([0,1])
	plt.savefig("analytics/individual_students/{name}.png".format(name=user_place))
	plt.close()

for i in range(0,user_number):
	userplot(i)
	plt.close()

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
	plt.xlabel("Question Number")
	plt.ylabel("Correct/ Incorrect")
	plt.yticks([0,1])
	plt.xticks(range(0, numquestions+1))
	plt.savefig("analytics/wholeclassplot.png")
	plt.close()

def averagesclass():
	"""Plots the average of the class"""
	listofresults=[]
	for i in range(0,user_number):
		current=list(map(function, data[i]["responses"]))
		a=len(current)
		for i in range(0,numquestions-a):
			current.append(0)

		listofresults.append(current)

	results= map(sum, zip(*listofresults))
	x_values=[]
	for i in range(1,numquestions+1):
		x_values.append(i)

	plt.scatter(x_values, results)
	plt.plot(x_values, results)

	plt.ylim(0,user_number)
	plt.xlim(0.5,numquestions+0.5)

	plt.xticks(list(range(1,numquestions+1)))
	plt.xlabel("Question Number")
	plt.ylabel("Number of Students who got the question Correct")

	plt.savefig("analytics/class_average.png")
	plt.close()

def hardestquestions():
	"""Finds the hardest Questions"""
	listofresults=[]
	for i in range(0,user_number):
		current=list(map(function, data[i]["responses"]))
		a=len(current)
		for i in range(0,numquestions-a):
			current.append(0)

		listofresults.append(current)
	results= map(sum, zip(*listofresults))
	resultsdict={}
	print(results)

	for i in range(0,len(results)):
		resultsdict[i]=results[i]

	resultsdict = OrderedDict(sorted(resultsdict.items(), key=lambda x: x[1]))
	return resultsdict

	# resultsdict is a dictionary of

questions=open('pseudo_data/questions.json')
questionsdata= json.load(questions)

questionsdata=questionsdata["data"]

dictionaryofthings= hardestquestions()

dataquestions=[]

for i in dictionaryofthings:
	dataquestions.append([str(questionsdata[i]["name"]),str(dictionaryofthings[i])])

x= simplejson.dumps(dict(dataquestions))
j=open('build/public/teacher/analytics/class/hardness_ranking.json','w')
j.write(x)

averagesclass()
wholeclassplot()
