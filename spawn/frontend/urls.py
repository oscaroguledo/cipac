from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='Home Page'),   
    path('About', index, name='About Page'),
    path('Services', index, name='Services Page'),
    path('Engineers', index, name='Engineers Page'),
    path('Contact', index, name='Contact Page'),
]