from rest_framework import serializers
from .models import Project, Order, OrderItems

class ProjectSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Project
        fields = (
            'id',
            'title',
            'description',
            'price',
            'urlImage'
        )

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = (
            'orderId',
            'projectId'
        )

class OrderSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Order
        fields = (
            'id',
            'name'
        )
