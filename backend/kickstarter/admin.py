from django.contrib import admin

# Register your models here.
from .models import Project, Order, OrderItems

modelsList = [Project, Order, OrderItems]
admin.site.register(modelsList)