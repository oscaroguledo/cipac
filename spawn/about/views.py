from django.shortcuts import render
from rest_framework import status,generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AboutSerializer
from .models import About
 
# Create your views here.
class AboutView(APIView):
    
    def get(self, request):
        queryset= About.objects.all()
        serializer_class = AboutSerializer
        serializer = AboutSerializer(queryset, many=False)
        print(serializer.data)
        return Response(serializer.data)
    