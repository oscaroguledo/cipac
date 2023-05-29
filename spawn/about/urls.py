from django.contrib import admin
from django.urls import path
from .views import AboutView


urlpatterns = [
    path('', AboutView.as_view(), name='Home Page'),
]