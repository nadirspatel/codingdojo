from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    print("Books and Authors")
    return HttpResponse(request)