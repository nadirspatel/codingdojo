from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    request.session['counter'] = 0
    return render(request,'index.html')

def process(request):
    request.session['fullname'] = request.POST['fullname']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comments'] = request.POST['comments']
    request.session['counter'] += 1
    return redirect('/result')

def result(request):
    return render(request,'result.html')
