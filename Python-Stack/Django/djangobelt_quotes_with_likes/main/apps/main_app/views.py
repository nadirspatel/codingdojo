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



#################################### core views ##############################


def dashboard(request):
    # if user is not logged in, redirect them back
    if 'userid' not in request.session:
        messages.error(request, "You are not logged in!")
        return redirect('/')
    else:
    #user is now logged in
        user = User.objects.get(id=request.session['userid'])
        my_quotes = Quote.objects.filter(creater_id=user.id)
        quotes = Quote.objects.all()
        likes_count = Quote.objects.all()
        #setup our database dict
        context = {
            'user': user,
            'myquotes': my_quotes,
            'quotes': quotes,
            'likescount': likes_count
            }
    return render(request,'main_app/dashboard.html', context)



#likes
def addlike(request, quote_id, user_id):
    quote = Quote.objects.get(id=quote_id)
    user = User.objects.get(id=user_id)
    likes_count = Quote.objects.get(id=likes_count)
    print(likes_count)
    context = {
        'quote_id': quote,
        'user_id': user,
        'likes_count': likes_count + 1
    } 
    return render(request,'dashboard.html', context)


def addquote(request):
    return render(request,'main_app/dashboard.html')


def processquote(request):
    request.session['error'] = False
    if len(request.POST['author_name']) < 3:
        messages.error(request, "Author must be more than 3 characters!")
        request.session['error'] = True
    if len(request.POST['description']) < 10:
        messages.error(request, "Quote must be more than 10 characters")
        request.session['error'] = True

    if request.session['error'] == True:
        return redirect('/addquote')
    else:
        user = User.objects.get(id=request.session['userid'])
        Quote.objects.create(author_name=request.POST['author_name'],description=request.POST['description'],creater_id=request.session['userid'],user=user,likes_count=0)
        return redirect('/dashboard')

#remove quote
def removequote(request, quote_id):
    quote = Quote.objects.get(id=quote_id)
    quote.delete()
    return redirect('/dashboard')


#edit account
def editAccount(request, user_id):
    user = User.objects.get(id=user_id)
    print(User.objects.all().values())
    context = {
        'user': user
    }
    return render(request,'main_app/edit.html', context)

#process edit account
def processedit(request, user_id):
    request.session['error'] = False
    if len(request.POST['first_name']) < 1:
        messages.error(request, "First Name must be more than 1 characters!")
        request.session['error'] = True
    if len(request.POST['last_name']) < 1:
        messages.error(request, "Last Name must be more than 1 characters")
        request.session['error'] = True
    if len(request.POST['email']) < 1:
        messages.error(request, "Email cannot be blank!")
        request.session['error'] = True
    elif not EMAIL_REGEX.match(request.POST['email']):
        messages.error(request, "Invalid Email Address!")
        request.session['error'] = True

    if request.session['error'] == True:
        return redirect('/editAccount/' +str(user_id))
    else:
        user = User.objects.get(id=user_id)
        user.first_name = request.POST['first_name']
        user.last_name = request.POST['last_name']
        user.email = request.POST['email']
        user.save()
    return redirect('/dashboard')


# view quotes for this user
def viewaccount(request, user_id):
    quote = Quote.objects.filter(user_id = user_id)
    user = User.objects.get(id = user_id)
    print(user)
    context = {
        'quote': quote,
        'user': user
    }
    return render(request,'main_app/view.html', context)



# logout
def logout(request):
    request.session.clear()
    return redirect('/')


