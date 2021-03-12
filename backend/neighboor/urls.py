from . import views
from django.urls import include, path
from rest_framework import routers
from django.conf.urls import include, re_path
from rest_framework.routers import DefaultRouter
from neighboor.views import index, first, ticket
from django.contrib import admin
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'myTickets',views.ViewTicketViewSet,basename='myTickets')
#router.register(r'createTickets', views.CreateTicketView,basename='createTicket')
#router.register(r'api/person', views.PersonViewSet)

urlpatterns = [
                path('', include(router.urls)),
                path('index/', index),
                path('test/',  first),
                #re_path(r'^message/[a-z]/$',mess),
                path('ticket/', ticket),
            ]
