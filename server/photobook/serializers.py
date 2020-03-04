from rest_framework import serializers
from .models import photos

class photoSerializer(serializers.ModelSerializer):
    class Meta:
        model = photos
        fields = "__all__"