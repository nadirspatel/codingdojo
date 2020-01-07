from django.shortcuts import render, HttpResponse, redirect
import re, bcrypt
from django.contrib import messages
from .models import *
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# the index function is called when root is visited
def index(request):
    
    return render(request,'main_app/index.html')

def register(request):
    request.session['error'] = False
    if len(request.POST['email']) < 1:
        messages.error(request, "Email cannot be blank!")
        request.session['error'] = True
    elif not EMAIL_REGEX.match(request.POST['email']):
        messages.error(request, "Invalid Email Address!")
        request.session['error'] = True

    if len(request.POST['first_name']) < 1:
        messages.error(request, "First name cannot be blank!")
        request.session['error'] = True
    elif len(request.POST['first_name']) <= 3:
        messages.error(request, "First name must be 3+ characters")
        request.session['error'] = True

    if len(request.POST['last_name']) < 1:
        messages.error(request, "Last name cannot be blank!")
        request.session['error'] = True

    elif len(request.POST['last_name']) <= 3:
        messages.error(request, "Last name must be 3+ characters")
        request.session['error'] = True

    if len(request.POST['password']) < 1:
        messages.error(request, "Password cannot be blank!")
        request.session['error'] = True
    elif len(request.POST['password']) <= 7:
        messages.error(request, "Password must be 7+ characters")
        request.session['error'] = True


    if not (request.POST['password_confirmation'] == request.POST['password']):
        messages.error(request, "Passwords must match!")
    
    if request.session['error'] == True: 
        return redirect('/')
    else:
        password_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        users = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=password_hash)
        request.session['id'] = users.id
        request.session['logged'] = True
        return redirect('/success')


def login(request):
    request.session['error'] = False
    if len(request.POST['login_email']) < 1:
        messages.error(request, "Email cannot be blank!")
        request.session['error'] = True
    elif not EMAIL_REGEX.match(request.POST['login_email']):
        messages.error(request, "Invalid Email Address!")
        request.session['error'] = True

    if len(request.POST['login_password']) < 1:
        messages.error(request, "Password cannot be blank!")
        request.session['error'] = True
    elif len(request.POST['login_password']) <= 7:
        messages.error(request, "Password must be 7+ characters")
        request.session['error'] = True
    try:
        user = User.objects.get(email=request.POST['login_email'])
        password_valid = bcrypt.checkpw(Request.POST[login_password.encode(), user.hashed_password.encode()])
        if password_valid:
            request.session['logged'] = True
            request.session['userid'] = user.id
        else:
            messages.error(request, "password/email did not match")
    except User.DoesNotExist:
        messages.error(request, "no user found with that email")
    except:
        messages.error(request, "hm, something else went wrong")

    if request.session['error'] == True:
        return redirect('/')
    


    
    return redirect('/success')

def success(request):
    return render(request,'main_app/success.html')
# Create your views here.
