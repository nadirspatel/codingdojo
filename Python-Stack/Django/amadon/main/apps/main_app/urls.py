from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^logout', views.logout),
    url(r'^dashboard', views.dashboard),
    url(r'^register', views.register),
    url(r'^login', views.login),
    url(r'^addItem', views.additem),
    url(r'^processitem', views.processitem), 
    url(r'^addtomyCart/(?P<item_id>\d+)', views.addtomyCart),
    url(r'^deleteitem/(?P<item_id>\d+)', views.removeitem),
    url(r'^view/(?P<item_id>\d+)/', views.viewitem),
    url(r'^edit/(?P<item_id>\d+)', views.edit),
    url(r'^processedit/(?P<item_id>\d+)', views.processedit),

]   