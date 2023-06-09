from django.db import models

# Create your models here.

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

## service model--------------------------------------
class Service(models.Model):
    name = models.CharField(verbose_name="Name of the Service", max_length=225)
    region = models.CharField(verbose_name="Region of service", max_length=225,null=True, blank=True)
    description = models.CharField(verbose_name="Description of the Service", max_length=225,null=True, blank=True)
    
    def __str__(self) -> str:
        return self.name

