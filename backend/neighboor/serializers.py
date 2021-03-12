from rest_framework.serializers import ModelSerializer
from .models import Ticket, Person
from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Person
        fields = ['id','user', 'addressLine1', 'addressLine2', 'city', 'state', 'zipCode', 'mileRadius']

class ViewTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id','title', 'need_by', 'category','created_at','store','helpee','helper','items','notes']

class CreateTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['title', 'category','person','notes']
