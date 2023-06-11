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
def index(request):
    return render(request, "build/index.html")

##about api starts here----------------------------------------------------------
@method_decorator(csrf_exempt, name='dispatch')
class getAbout(APIView): 
    serializer_class = AboutSerializer
    def get(self, request):
        
        detail = {"company_name": About.objects.all().first().company_name,
                    "history": About.objects.all().first().history,
                    "about": About.objects.all().first().about,
                    "motto": About.objects.all().first().motto,
                    "slogan": About.objects.all().first().slogan}
        #print(detail)
        #return Response(detail, status=status.HTTP_200_OK)
        if detail:
            return Response({"message": "About Page details.", "response": detail},
                            status=status.HTTP_200_OK)
        else:
            return Response({"message": "There is no detail", "response": detail},
                            status=status.HTTP_204_NO_CONTENT)


@method_decorator(csrf_exempt, name='dispatch')   
class postAbout(APIView): 
    serializer_class = AboutSerializer 
    def post(self, request):
        data = request.data
        if data:
            serializer = AboutSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save_once()
                return  Response({"message": "successfully added about page details",
                                  "response":serializer.data},
                                 status=status.HTTP_201_CREATED)
            else:
                return Response({"message": "failed to add about page details"}, status=status.HTTP_304_NOT_MODIFIED)

        else:
            default_errors = serializer.errors
            new_error = {}
            for field_name, field_errors in default_errors.items():
                new_error[field_name] = field_errors[0]
            return Response(new_error, status=status.HTTP_400_BAD_REQUEST)
  
        
class editAbout(APIView): 
    def patch(self, request):
        try:
            aboutmodel = About.objects.get(id=1)
        except About.DoesNotExist:
            return Response({'error': 'This about model does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer  =AboutSerializer(aboutmodel, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response({"message": "successfully updated about page details",
                                "response":serializer.data},
                                status=status.HTTP_200_OK)
        else:
            return Response({"message": "failed to update about page details"}, status=status.HTTP_304_NOT_MODIFIED)

##contactus api starts here----------------------------------------------------------
@method_decorator(csrf_exempt, name='dispatch')
class getContact(APIView): 
    serializer_class = AboutSerializer
    def get(self, request):
        detail = {"company_name": About.objects.all().first().company_name,
                    "email": About.objects.all().first().email,
                    "phone": About.objects.all().first().phone,
                    "address": About.objects.all().first().address}
        #print(detail)
        if detail:
            return Response({"message": "Contact Page details.", "response": detail},
                            status=status.HTTP_200_OK)
        else:
            return Response({"message": "There is no detail", "response": detail},
                            status=status.HTTP_204_NO_CONTENT)
 

##contactus api ends here----------------------------------------------------------