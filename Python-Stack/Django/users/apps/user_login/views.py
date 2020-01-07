from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

# Create your views here.

def index(request):
    print("hi there")
    return HttpResponse()
