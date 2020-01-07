from __future__ import unicode_literals
from django.db import models

# Create your models here.

class Dojo(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)

class Ninja(models.Model):
    id = models.IntegerField(primary_key=True)
    dojo_id = models.ForeignKey("Dojo",related_name="ninjas"),
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)