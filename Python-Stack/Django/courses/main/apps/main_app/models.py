from django.db import models

# Create your models here.
class Course(models.Model):
    course_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Description(models.Model):
    content = models.CharField(max_length=255)
    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name='descriptions')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
