from django.urls import path
from .views import ProfileLogin, ProfileLogout, ProfileRegister, ProfileView

urlpatterns = [
    path('profile', ProfileView.as_view(), name="view profile page"),
    #path('edit_profile/<str:profile_id>', editProfile.as_view(), name="edit profile page")
    path('register', ProfileRegister.as_view(), name="register"),
    path('login', ProfileLogin.as_view(), name="login"),
    path('logout', ProfileLogout.as_view(), name="logout")
]
