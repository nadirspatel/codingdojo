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
    try:
        user = User.objects.get(email=request.POST['email'])
    except:
        #is the email empty or not enough chars?
        if len(request.POST['email']) < 1:
            messages.error(request, "Email cannot be blank!")
            request.session['error'] = True
        elif not EMAIL_REGEX.match(request.POST['email']):
            messages.error(request, "Invalid Email Address!")
            request.session['error'] = True

        #is the first name empty or not enough chars?
        if len(request.POST['first_name']) < 1:
            messages.error(request, "First name cannot be blank!")
            request.session['error'] = True
        elif len(request.POST['first_name']) <= 3:
            messages.error(request, "First name must be 3+ characters")
            request.session['error'] = True

        #is the last name empty or not enough chars?
        if len(request.POST['last_name']) < 1:
            messages.error(request, "Last name cannot be blank!")
            request.session['error'] = True
        elif len(request.POST['last_name']) <= 3:
            messages.error(request, "Last name must be 3+ characters")
            request.session['error'] = True

        #is the password empty or not enough chars?
        if len(request.POST['password']) < 1:
            messages.error(request, "Password cannot be blank!")
            request.session['error'] = True
        elif len(request.POST['password']) <= 7:
            messages.error(request, "Password must be 7+ characters")
            request.session['error'] = True

        #do the passwords match?
        if not (request.POST['password_confirmation'] == request.POST['password']):
            messages.error(request, "Passwords must match!")

    #does this user exist? if so log the message and set session error=True
    if 'user' in locals():
        messages.error(request, "email address already exists")
        request.session['error'] = True

    #if any errors, take them back and send messages
    if request.session['error'] == True: 
        return redirect('/')
    #otherwise lets hash the password, save their info and log them in
    else:
        password_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        users = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=password_hash)
        request.session['userid'] = users.id
        request.session['logged'] = True
        return redirect('/dashboard')



def login(request):
    request.session['error'] = False #sets our session error default
    #lets do some form validations when logging in
    #is the email empty or not enough chars?
    if len(request.POST['login_email']) < 1:
        messages.error(request, "Email cannot be blank!")
        request.session['error'] = True
    elif not EMAIL_REGEX.match(request.POST['login_email']):
        messages.error(request, "Invalid Email Address!")
        request.session['error'] = True
    #is the password empty or not enough chars?
    if len(request.POST['login_password']) < 1:
        messages.error(request, "Password cannot be blank!")
        request.session['error'] = True
    elif len(request.POST['login_password']) <= 7:
        messages.error(request, "Password must be 7+ characters")
        request.session['error'] = True
    #does this email/user exist in our database?
    try:
        user = User.objects.get(email=request.POST['login_email'])
    except User.DoesNotExist:
        messages.error(request, "no user found with that email")
        request.session['error'] = True
    except:
        messages.error(request, "uh oh, something else went wrong")
    #check if password is valid via bcrypt
    password_valid = bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode())
    if password_valid == True:
            request.session['logged'] = True
            request.session['userid'] = user.id
    else:
        messages.error(request, "password/email did not match")
        request.session['error'] = True
    if request.session['error'] == True:
        return redirect('/')
    # seems everything checks out, lets forward them to our dashboard
    return redirect('/dashboard')


################ dashboard views ################

def dashboard(request):
    # if user is not logged in, redirect them back
    if 'userid' not in request.session:
        messages.error(request, "You are not logged in!")
        return redirect('/')
    else:
    #user is now logged in
        user = User.objects.get(id=request.session['userid'])
        my_cart = Store.objects.filter(creater_id=user.id)
        available_items = Store.objects.exclude(creater_id=user.id)
        #setup our database -> dict
        context = {
            'user': user,
            'myitems': my_cart,
            'items': available_items
        }
    return render(request,'main_app/dashboard.html', context)


############### create our store views below ###############

def additem(request):
    return render(request,'main_app/addItem.html')

def removeitem(request, item_id):
    item = Store.objects.get(id=item_id)
    item.delete()
    return redirect('/dashboard')

def addtomyCart(request,item_id):
    item = Store.objects.get(id=item_id)
    Store.creater_id = request.session['userid']
    Store.save()
    return redirect('/dashboard')


def processitem(request):
    request.session['error'] = False
    if len(request.POST['item_name']) < 3:
        messages.error(request, "Title must be more than 3 characters")
        request.session['error'] = True
    if len(request.POST['price']) < 1:
        messages.error(request, "Price must me more than 1 character")
        request.session['error'] = True
    if len(request.POST['description']) < 10:
        messages.error(request, "Description must me more than 10 characters")
        request.session['error'] = True
    if len(request.POST['category']) < 1:
        messages.error(request, "Category cannot be blank")
        request.session['error'] = True
    if request.session['error'] == True:
        return redirect('/addItem')
    else:
        user = User.objects.get(id=request.session['userid'])
        Store.objects.create(item_name=request.POST['item_name'],price=request.POST['price'],category=request.POST['category'],description=request.POST['description'],creater_id=0, user = user)
        return redirect('/dashboard')



def edit(request, item_id):
    store = Store.objects.get(id=item_id)
    print(Store.objects.all().values())
    context = {
        'items': item_id
    }
    return render(request,'main_app/edit.html', context)



def processedit(request, item_id):
    request.session['error'] = False
    if len(request.POST['item_name']) < 3:
        messages.error(request, "Title must be more than 3 characters!")
        request.session['error'] = True
    if len(request.POST['description']) < 10:
        messages.error(request, "Description must me more than 10 characters")
        request.session['error'] = True
    if len(request.POST['location']) < 1:
        messages.error(request, "Category cannot be blank")
        request.session['error'] = True

    if request.session['error'] == True:
        return redirect('/edit/' +str(item_id))
    else:
        item = Store.objects.get(id=item_id)
        item.item_name = request.POST['item_name']
        item.price = request.POST['price']
        item.description = request.POST['description']
        item.category = request.POST['category']
        item.save()
    return redirect('/dashboard')



def viewitem(request, item_id):
    item = Store.objects.get(id=item_id)
    user = User.objects.get(id = User.user_id)
    print(user)
    context = {
        'item': item,
        'user': user
    } 
    return render(request,'main_app/view.html', context)



def logout(request):
    request.session.clear()
    return redirect('/')