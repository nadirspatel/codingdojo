from django.shortcuts import render, HttpResponse, redirect
from .models import User #import our User table from database

def index(request):
    users = User.objects.all()
    context = {
        'users': users
    }
    return render(request,'main_app/index.html', context)



def create(request):
    User.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'],)
    request.session['first_name'] = request.POST['first_name']
    request.session['last_name'] = request.POST['last_name']
    request.session['email'] = request.POST['email']
    print(User.objects.first().__dict__) #show in console as dictionary
    return redirect('/users')



def new(request):
    return render(request, 'main_app/add_user.html')



def show(request, user_id):
    users = User.objects.get(id=user_id)
    context = {
        'users': users
    }
    return render(request, 'main_app/show.html', context)



def edit(request, user_id):
    users = User.objects.get(id=user_id)
    context = {
        'users': users
    }
    request.session['id'] = users.id
    return render(request,'main_app/edit.html', context)



def update(request):
    users = User.objects.get(id=request.session['id'])
    users.first_name = request.POST['first_name']
    users.last_name = request.POST['last_name']
    users.email = request.POST['email']
    users.save()
    return redirect('/users/'+str(request.session['id']))



def destroy(request, user_id):
    users = User.objects.get(id=user_id)
    users.delete()
    return redirect('/users')