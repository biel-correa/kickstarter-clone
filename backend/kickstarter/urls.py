from django.urls import path
from .views import ProjectView, OrderView, OrderItemsView

urlpatterns = [
    path('projects/', ProjectView.as_view()),
    path('projects/<int:pk>/', ProjectView.as_view()),
    path('orders/', OrderView.as_view()),
    path('orders/<int:pk>/', OrderView.as_view()),
    path('order-items/', OrderItemsView.as_view()),
    path('order-items/<int:pk>/', OrderItemsView.as_view()),
]
