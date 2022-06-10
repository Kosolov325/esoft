from django.urls import path
from webpage.views import *

urlpatterns = [
    path('', homeView, name='home'),
    path('index/', indexView, name='index'),
    path('cadastrar/', cadastrarView, name='cadastrar'),
]