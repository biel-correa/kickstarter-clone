from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    price = models.FloatField()
    urlImage = models.URLField()

class Order(models.Model):
    name = models.CharField(max_length=100)
    
class OrderItems(models.Model):
    orderId = models.ForeignKey(Order, on_delete=models.CASCADE)
    projectId = models.ForeignKey(Project, on_delete=models.CASCADE)

