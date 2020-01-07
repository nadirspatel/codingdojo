from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
	request.session['counter'] = 0
	return render(request,'index.html')

def random_word(request):
	request.session['counter'] += 1
	context = {
    	"get_random": get_random_string(length=14)
    }
	return render(request,'index.html', context)

def reset(request):
	del request.session['counter']
	return redirect("/")