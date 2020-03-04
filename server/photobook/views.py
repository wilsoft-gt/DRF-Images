from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def photoUpload(request):
    return HttpResponse("<h1>Worked!!</h1>")
