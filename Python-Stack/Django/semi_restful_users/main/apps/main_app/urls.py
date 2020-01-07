from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^users$', views.index),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^users/new$', views.new),
    url(r'^users/create$', views.create),
    url(r'^users/(?P<user_id>\d+)$', views.show),
    url(r'^users/(?P<user_id>\d+)/edit$', views.edit),
    url(r'^users/(?P<user_id>\d+)/destroy$', views.destroy),
    url(r'^users/update$', views.update),
    
]   