from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Quote(models.Model):
    author_name = models.CharField(max_length=255)
    description = models.TextField()
    creater_id = models.IntegerField()
    likes_count = models.IntegerField()
    user = models.ForeignKey(User, related_name="quotes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# class Like(models.Model):
#     user = models.ForeignKey(User)
#     quote = models.ForeignKey(User)
#     created = models.DateTimeField(auto_now_add=True)