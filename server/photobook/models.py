from django.db import models

# Create your models here.
class photos(models.Model):
    photo = models.ImageField()

    def __str__(self):
        return self.photo.name