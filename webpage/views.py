import requests
from django.shortcuts import render, redirect

# Create your views here.
def homeView(request):
    return redirect("index")

def indexView(request):
    response = requests.get('http://localhost:8000/api/endere%C3%A7os/')
    addresses = response.json()
    return render(request, 'index.html', {'addresses': addresses})

def cadastrarView(request):
    return render(request, 'cadastrar.html')