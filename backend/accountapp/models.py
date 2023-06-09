import uuid,datetime, os
from django.dispatch import receiver
from django.db import models
from django.contrib.auth.models import User, BaseUserManager, AbstractBaseUser, AbstractUser, Group
from django.contrib.auth.hashers import make_password


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, id, password=None, **kwargs):
        if not email:
            raise ValueError('Accounts must have a  email')
        if not first_name:
            raise ValueError('Accounts must have a  first name')
        if not last_name:
            raise ValueError('Accounts must have a  last name')
        if not id:
            raise ValueError('Accounts must have a  id')
        user = self.model(email=email, first_name=first_name, last_name=last_name, id=id)
        self.password = make_password(password)
        user.set_password(self.password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, id, password):
        user = self.model(first_name=first_name, last_name=last_name,
                          password=make_password(password),
                          email=email, id=id)

        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Profile(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, max_length=7)
    email = models.EmailField(verbose_name='email', max_length=255, unique=True, null=True)
    first_name = models.CharField(verbose_name='first name', max_length=255)
    last_name = models.CharField(verbose_name='last name', max_length=255)
    profile_img = models.ImageField(default="", null=True, blank=True)
    phone=models.IntegerField(verbose_name="Phone number of the Company", max_length=11, null=False, blank=False,
                              default="12345678912")
    address = models.TextField(verbose_name="Address of the Company", null=False, blank=False)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    @property
    def username(self):
        usernm = f"{self.first_name} {self.last_name}"
        return usernm
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return self.first_name

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, perm, obj=None):
        return True
    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

