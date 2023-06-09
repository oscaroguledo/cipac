# Generated by Django 4.1.5 on 2023-05-13 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(blank=True, max_length=225, null=True, verbose_name='Name of the Company')),
                ('history', models.TextField(blank=True, null=True, verbose_name='History of the Company')),
                ('about', models.TextField(blank=True, null=True, verbose_name='About the Company')),
                ('logo', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Logo of the Company')),
            ],
        ),
    ]
