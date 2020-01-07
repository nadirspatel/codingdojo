from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),   # This line has changed! Notice that urlpatterns is a list, the comma is in
    url(r'^logout', views.logout),
    url(r'^dashboard', views.dashboard),
    url(r'^register', views.register),
    url(r'^login', views.login),
    url(r'^addquote', views.addquote),
    url(r'^processquote', views.processquote), 
    url(r'^deletequote/(?P<quote_id>\d+)', views.removequote),
    url(r'^addLike/(?P<quote_id>\d+)', views.addlike),
    url(r'^viewaccount/(?P<user_id>\d+)/', views.viewaccount),
    url(r'^editAccount/(?P<user_id>\d+)', views.editAccount),
    url(r'^processedit/(?P<user_id>\d+)', views.processedit),

]   