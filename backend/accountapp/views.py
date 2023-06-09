import json
import requests
import threading
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from . models import About
from .serializers import AboutSerializer

# Create your views here.
