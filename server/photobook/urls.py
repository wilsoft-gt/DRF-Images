from django.urls import path, include
from photobook import views

from rest_framework import routers
from .viewsets import photoSets

router = routers.SimpleRouter()
router.register("photos", photoSets)

urlpatterns = [
    path("", views.photoUpload, name='photoupload'),
    path("api/v01/", include(router.urls))
]