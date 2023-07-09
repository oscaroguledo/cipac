from django.urls import path
from .views import ProfileRegister, VerifyEmail #,ProfileView, 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    #path('profile', ProfileView.as_view(), name="view profile page"),
    path('register', ProfileRegister.as_view(), name="register"),
    path('email_verify', VerifyEmail.as_view(), name="email_verify"),
    #path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #"""path('login', ProfileLogin.as_view(), name="login"),
    #path('logout', ProfileLogout.as_view(), name="logout")"""
]
