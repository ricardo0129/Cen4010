from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.viewsets import GenericViewSet
from .models import Ticket, Person
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, status, filters
from rest_framework import permissions
from .serializers import UserSerializer, GroupSerializer, PersonSerializer,CreateTicketSerializer, ViewTicketSerializer
from .forms import RegisterForm
from django.views.decorators.csrf import csrf_exempt


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

def index(request):
    print(request.user)
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    print(request.user)
    return HttpResponse("THIS IS HOME PAGE")

def register(response):
    if response.method== "POST":
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()

        return redirect("/home")
    else:
        form = RegisterForm()
    return render(response, "register/register.html",{"form":form})

def first(request):
    data = list(Person.objects.values())
    return JsonResponse(data,safe=False)

@csrf_exempt
def ticket(request):
    print(request.user)
    #if not request.user.is_anonymous:
        

    if request.method== "POST":
        print(request)
        serializer = TicketSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
    print(Ticket.objects.all())
    return HttpResponse("THIS IS Workign")


class ViewTicketViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
       return Ticket.objects.filter(helpee=self.request.user)
    
    serializer_class = ViewTicketSerializer
    permission_classes = [permissions.IsAuthenticated]


# class CreateTicketView(viewsets.ModelViewSet):
#     #permission_classes = [api_permissions.IsAuthenticated]
#     serializer_class = CreateTicketSerializer

#     def get_queryset(self):
#         return Ticket.objects.filter(person=self.request.user)

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save(person=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         else:
#             print(serializer.errors)
#             return Response(status=status.HTTP_400_BAD_REQUEST)