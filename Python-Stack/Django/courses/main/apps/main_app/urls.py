from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^destroyed$', views.destroyed),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^courses/destroy/(?P<course_id>\d+)$', views.destroy),
    url(r'^add$', views.submitted)
]   