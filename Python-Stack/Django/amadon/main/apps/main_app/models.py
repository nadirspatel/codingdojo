from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Store(models.Model):
    item_name = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.TextField()
    creater_id = models.IntegerField()
    user = models.ForeignKey(User, related_name="items")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


