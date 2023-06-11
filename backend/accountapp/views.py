import json
import requests
import threading
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model, login, logout
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from . models import Profile
from .serializers import ProfileSerializer, RegisterSerializer, LoginSerializer

# Create your views here.
class ProfileRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = RegisterSerializer
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            print("---------------------------------")
            if user:
                return Response({"message":" signup is successful","response":serializer.data}, status=status.HTTP_201_CREATED)
            else:
                return Response({"message":" signup is unsuccessful","response":serializer.data}, status=status.HTTP_304_NOT_MODIFIED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    


class ProfileLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        data = request.data
        print("kfkkfkfkgks")
        serializer = LoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response({"message":f" Login is successful {user}","response":serializer.data}, status=status.HTTP_200_OK)

class ProfileLogout(APIView):
    def post(self, request):
        logout(request)
        return Response({"message":"You have been logged out"},status=status.HTTP_200_OK)
class ProfileView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def get(self, request):
        profile = Profile.objects.filter()
        serializer = ProfileSerializer(profile, many=True)
        return Response({"user":serializer.data}, status=status.HTTP_200_OK)