from django.urls import path
from .views import * 

urlpatterns = [
    path("", index, name="index"),
    path('about', getAbout.as_view(), name="about page"),
    path('post_about', postAbout.as_view(), name="post about page"),
    path('edit_about', editAbout.as_view(), name="edit about page"),
    path('contact', getContact.as_view(), name="contact page"),
    path('service', ServiceView.as_view(), name="service page")
]
