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
#from rest_framework.authentication import SessionAuthentication
from . models import Profile
from .serializers import ProfileSerializer, RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse

# Create your views here.
class ProfileRegister(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = RegisterSerializer
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):##check is data is valid
            user = serializer.create(request.data)
            print("---------------------------------")
            user_data =serializer.data
            profile = Profile.objects.get(email=user_data["email"])

            token = RefreshToken.for_user(profile)

            current_site = get_current_site(request).domain##get current site 
            relativelink = reverse("email_verify")

            url = "https://"+ current_site+relativelink+"?token="+str(token.access_token)
            email_body="Hi "+ profile.email+" Use the link below to verify your email. \n"+ url
            data = {"domain":url,
                    "email_body":email_body,
                    "email_subject":"Verify Your email.",
                    "to_email":profile.email}
            Util.send_email(data)# sends the emails


            return Response({"message":" signup is successful","response":serializer.data}, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)

class VerifyEmail(generics.GenericAPIView):
    def get(self):
        pass
    
"""

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
        return Response({"message":"You have been logged out"},status=status.HTTP_200_OK)"""

class ProfileView(APIView):
    permission_classes = (permissions.AllowAny,)
    #authentication_classes = (SessionAuthentication,)
    def get(self, request):
        profile = Profile.objects.filter()
        serializer = ProfileSerializer(profile, many=True)
        return Response({"user":serializer.data}, status=status.HTTP_200_OK)