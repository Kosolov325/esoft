from django.shortcuts import render
from rest_framework import viewsets
from api.serializers import *
from api.models import *

# Create your views here.
class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer