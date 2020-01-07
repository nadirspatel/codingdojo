from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index)
]

#Examples of Regular Expression
# url(r'^articles/(?P\d+)$', views.show)
# url(r'^articles/(?P\w+)$', views.show_word)
# url(r'^articles/2003/$', views.special_case_2003)
# url(r'^articles/(?P[0-9]{4})$', views.year_archive)
# url(r'^articles/(?P[0-9]{4})/(?P[0-9]{2})$', views.month_archive)

# Here is a cheat sheet for expressions you'll be using regularly:
# '^' Matches the following characters at the beginning of a string. Example: '^a' matches 'anna' but not 'banana'.
# '$' Matches the previous characters at the end of a string. Example: 'a$' matches 'anna' and 'banana' but not 'fan'.
# '[]' Matches any value in a range. Example: '[0-9]' matches '9' and '9s'.
# '{n}' Matches n number repetitions of the preceding pattern. Example: '[0-9]{2}' matches '91' but not '9'
# \d Matches digits.  Example: "\d" matches "8" and "877"
# \d+ matches a string with one or more digits
# \w Matches characters.
# \w+ matches a string with one or more character/word
