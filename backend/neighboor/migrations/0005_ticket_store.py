# Generated by Django 3.1 on 2021-03-12 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('neighboor', '0004_auto_20210311_2021'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='store',
            field=models.TextField(blank=True),
        ),
    ]
