from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils.timezone import now

class Person(models.Model):
    user = models.OneToOneField(User,on_delete = models.CASCADE)
    addressLine1 = models.CharField(max_length=128)
    addressLine2 = models.CharField(max_length=128)
    city = models.CharField(max_length=128)
    state = models.CharField(max_length=128)
    zipCode = models.IntegerField()
    mileRadius = models.IntegerField()

    def __str__(self):
        return '%s' % (self.user)


class Ticket(models.Model):
    title = models.CharField(max_length=128)
    category = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    need_by = models.DateTimeField()
    store= models.TextField(blank=True)
    helpee= models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='helpee')
    helper= models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,  related_name='helper',null=True,)
    items= models.TextField()
    notes = models.TextField(default="",blank=True)
    
    def __str__(self):
        return '%s %s' % (self.title, self.body)
