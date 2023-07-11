from django.db import models 
from django.contrib.auth.models import User, BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.hashers import make_password

# import uuid,datetime, os

# Create your models here.

## Custom User model----------------------------------------------------------------
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email= self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email,password, **kwargs):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_staff =True
        user.is_superuser =True
        user.save()
        return user

## User model----------------------------------------------------------------------------
class Profile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    first_name = models.CharField(verbose_name='first name', max_length=255)
    last_name = models.CharField(verbose_name='last name', max_length=255)
    profile_img = models.ImageField(default="", null=True, blank=True)
    phone=models.IntegerField(verbose_name="Phone number of the Company", max_length=11, null=False, blank=False,
                              default="12345678912")
    address = models.TextField(verbose_name="Address of the Company", null=False, blank=False)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return str(self.profile_id)
    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"


## about model--------------------------------------
class About(models.Model):
    company_name = models.CharField(verbose_name="Name of the Company", max_length=225, null=False, blank=False)
    history = models.TextField(verbose_name="History of the Company", null=False, blank=False)
    about = models.TextField(verbose_name="About the Company", null=False, blank=False)
    motto= models.CharField(verbose_name="Name of the Company", max_length=225, null=False, blank=False)
    slogan = models.CharField(verbose_name="Name of the Company", max_length=225, null=False, blank=False)
    email = models.EmailField(verbose_name="Email", max_length=225, null=False, blank=False)
    phone=models.IntegerField(verbose_name="Phone number of the Company", max_length=11, null=False, blank=False,
                              default="12345678912")
    address = models.TextField(verbose_name="Address of the Company", null=False, blank=False)
    
    def __str__(self) -> str:
        return self.company_name
    
    def save_once(self, *args, **kwargs):
        if About.objects.filter().count() >= 1:
            raise IndexError('There is can be only one instance About the company')
        return super(About, self).save(*args, **kwargs)



## categories model----------------------------------------------------------------------------
class Category(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False )
    icon = models.ImageField(upload_to='icons/', null=True, blank=True, default='/icons/icon.png')
    # createdAt = models.DateTimeField(auto_now_add = True )

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

## Engineers model-------------------------------------------------------------------------------
class Engineer(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='engineers/', null=True, blank=True, default='/engineers/placeholder.png')
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    createdAt = models.DateTimeField(auto_now_add = True )

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

## products and supplies model------------------------------------------------------------------
class Product(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='products/', null=True, blank=True, default='/products/placeholder.png')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    brand = models.CharField(max_length=200, null=True, blank=False )
    createdAt = models.DateTimeField(auto_now_add = True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


## services models-----------------------------------------------------------------------------------------
class Service(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='services/', null=True, blank=True, default='/services/placeholder.png')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    brand = models.CharField(max_length=200, null=True, blank=False )
    createdAt = models.DateTimeField(auto_now_add = True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
    
## Review/rating model-----------------------------------------------------------------------------------
class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)
    

## Order model-----------------------------------------------------------------------------------------
class Order(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

## orderItem model-----------------------------------------------------------------------------------------
class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

## shippingAddress models-----------------------------------------------------------------------------------------
class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
    
