from rest_framework import serializers
from .models import About

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ("id", "company_name","history","about","motto","slogan", "email","phone","address")
