from rest_framework import serializers
from .models import About, Service

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ("id", "company_name","history","about","motto","slogan", "email","phone","address")

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'service_name','region','description')
