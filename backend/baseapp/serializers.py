from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model, authenticate
from rest_framework.validators import UniqueValidator, ValidationError
from django.contrib.auth.password_validation import validate_password


UserModel = get_user_model()
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=Profile.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Profile
        fields = ('email', 'password', 'password2')
        extra_kwargs = {
            'email': {'required': True},
            'password': {'required': True},
            'password2': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = Profile.objects.create(
            email=validated_data['email']
        )
        
        user.set_password(validated_data['password'])
        user.save()

        return user
"""class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    def check_user(self, clean_data):
        user = authenticate(email=clean_data["email"], password=clean_data["password"])
        if not user:
            raise ValidationError('Profile does not exist.')
        return user
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("id", "email","first_name","last_name","profile_img","phone","address","is_staff")"""



class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ("id", "company_name","history","about","motto","slogan", "email","phone","address")
