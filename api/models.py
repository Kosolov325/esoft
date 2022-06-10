from django.db import models

# Create your models here.
class Address(models.Model):
    cep = models.CharField(max_length=8)
    logradouro = models.CharField(max_length=60)
    bairro = models.CharField(max_length=60)
    complemento = models.TextField(max_length=100, blank=True)
    localidade = models.CharField(max_length=60)
    uf = models.CharField(max_length=2)
    ibge =  models.CharField(max_length=7)
    gia = models.CharField(max_length=4, blank=True)
    ddd = models.CharField(max_length=2)
    siafi = models.CharField(max_length=4)