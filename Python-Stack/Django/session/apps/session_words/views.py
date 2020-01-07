from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

# Create your views here.

def index(request):
    if not 'temp_list' in request.session:
        request.session['temp_list'] = [] 
    return render(request,'index.html')

def add_word(request):
    # store our data in a list to grab
    new_dict = {}
    new_dict['word'] = request.POST['word']
    new_dict['color'] = request.POST['color']
    new_dict['time'] = strftime("%Y-%m-%d %H:%M %p", gmtime() )

    # is big font enabled?
    if request.POST['bigfonts'] == "1":
        new_dict['bigfonts'] = "28px"
    elif request.POST['bigfonts'] == "0":
        new_dict['bigfonts'] = "12px"

    print(request.POST['bigfonts'])
    print(new_dict)

    request.session['temp_list'].append(new_dict)

    request.session.modified = True
    return redirect('/session_words')

def clear(request):
    del request.session['temp_list']
    return redirect('/session_words')