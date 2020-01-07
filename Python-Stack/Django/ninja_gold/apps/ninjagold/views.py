from django.shortcuts import render, HttpResponse, redirect
from django import random
from time import gmtime, strftime


def index(request):
	session.clear()
	ninjas_gold = session['ninjas_gold']
    if 'ninjas_gold' in request.session:
		pass
	else:
		request.session['ninjas_gold'] = int(0)
    if not 'temp_list' in request.session:
        request.session['temp_list'] = [] 
    return render(request,'index.html', ninjas_gold)


def process_money(request):
    # store our data in a session list to grab
    new_dict = {}
    new_dict['building'] = request.POST['building']
    new_dict['ninjas_gold'] = request.POST['ninjas_gold']
    new_dict['time'] = strftime("%Y-%m-%d %H:%M %p", gmtime() )

	#begin processing gold rules
   if request.form['building'] == 'farm':
        rand_gold = int(random.randrange(10,20))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the farm!".format(rand_gold)

    if request.form['building'] == 'cave':
        rand_gold = int(random.randrange(5,10))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the cave!".format(rand_gold)

    if request.form['building'] == 'house':
        rand_gold = int(random.randrange(2,5))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the house!".format(rand_gold)

    elif request.form['building'] == 'casino':
        rand_gold = int(random.randrange(-50,50))
        if rand_gold < 0:
            session['ninjas_gold'] = int(session['ninjas_gold']) - rand_gold
            session['message'] = "<font color=red>You lost {} gold from the casino!</font>".format(rand_gold)
        elif rand_gold > 0:
            session['ninjas_gold'] += rand_gold
            session['message'] = "<font color=green>You gained {} gold from the casino".format(rand_gold)
	# end processing gold rules

    print(new_dict) # print out to console to see what we are getting for testing

    request.session['temp_list'].append(new_dict) #append new dictionary into our session list "temp_list"

    request.session.modified = True #lets it know that the session was modified so it doesnt overwrite the temp_list
    return redirect('/')



def clear(request):
    del request.session['temp_list']
    return redirect('/')
