import json
import requests
import threading
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from . models import *
from .serializers import *


# Create your views here.
def index(request):
    return render(request, "build/index.html")

class AboutView(APIView):
    
    serializer_class = AboutSerializer
  
    def get(self, request):
        detail = {"company_name": About.objects.all().first().company_name,
                    "history": About.objects.all().first().history,
                    "about": About.objects.all().first().about}
        print(detail)
        return Response([detail], status=status.HTTP_200_OK)
  
    def post(self, request):
  
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data,status=status.HTTP_200_OK)
    def patch(self, request):
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data,status=status.HTTP_200_OK)