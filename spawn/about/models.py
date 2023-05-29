from django.db import models

# Create your models here.
class About(models.Model):
    company_name = models.CharField(verbose_name="Name of the Company", max_length=225, null=True, blank=True)
    history = models.TextField(verbose_name="History of the Company", null=True, blank=True)
    about = models.TextField(verbose_name="About the Company", null=True, blank=True)
    logo = models.ImageField(verbose_name="Logo of the Company", null=True, blank=True)

    def __str__(self) -> str:
        return self.company_name
    
    def save(self, *args, **kwargs):
        if About.objects.filter().count() >= 1:
            raise IndexError('There is can be only one instance About the company')
        return super(About, self).save(*args, **kwargs)

