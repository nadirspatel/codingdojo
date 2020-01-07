from django.shortcuts import render, HttpResponse, redirect
# the index function is called when root is visited
from .models import *
def index(request):
    courses = Course.objects.all()
    context = {
        'courses': courses
    }
    return render(request,'main_app/index.html', context)

def submitted(request):
    new_course = Course.objects.create(course_name=request.POST['name'])
    Description.objects.create(content=request.POST['description'], course= new_course)

    return redirect('/')


def result(request):
    return render(request, 'main_app/created.html')

def destroy(request, course_id):
    courses = Course.objects.get(id=course_id)
    context = {
        'courses': courses
    }
    request.session['id'] = course_id
    return render(request,'main_app/destroyed.html', context)

def destroyed(request):
    courses = Course.objects.get(id=request.session['id'])
    courses.delete()
    return redirect('/')
    
# Create your views here.
