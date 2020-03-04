from rest_framework import viewsets
from .models import photos

from .serializers import photoSerializer

class photoSets(viewsets.ModelViewSet):
    queryset = photos.objects.all()
    serializer_class = photoSerializer