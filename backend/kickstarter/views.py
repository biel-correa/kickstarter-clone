from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ProjectSerializer, OrderItemsSerializer, OrderSerializer
from .models import Project, Order, OrderItems
from django.http.response import JsonResponse
from rest_framework.response import Response
from django.http.response import Http404

# TODO: alterar mensagens

class ProjectView(APIView):

    def get_project(self, pk):
        try:
            project = Project.objects.get(id=pk)
        except Project.DoesNotExist():
            raise Http404
        return project
        
    def get(self, resquest, pk=None):
        if pk:
            data = self.get_project(pk)
            serializer = ProjectSerializer(data)
        else:
            data = Project.objects.all()
            serializer = ProjectSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        serializer = ProjectSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse (" Estudante Cadastrado com Sucesso!", safe=False)
        return JsonResponse ("O cadastro de Estudante Falhou!", safe=False)
    
    def patch(self, request, pk=None):
        project_to_update = self.get_project(pk)
        serializer = ProjectSerializer(instance=project_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse (" Registro atualizado com sucesso!", safe=False)
        return JsonResponse ("A atualização do cadastro Falhou!", safe=False)
    
    def delete(self, request, pk=None):
        project_to_delete = self.get_project(pk)
        try:
            project_to_delete.delete()
            return JsonResponse("Deletado com Sucesso", safe=False)
        except:
            return JsonResponse("Deletado sem Sucesso", safe=False)
    

class OrderView(APIView):
    
        def get_order(self, pk):
            try:
                order = Order.objects.get(id=pk)
            except Order.DoesNotExist():
                raise Http404
            return order
            
        def get(self, resquest, pk=None):
            if pk:
                data = self.get_order(pk)
                serializer = OrderSerializer(data)
            else:
                data = Order.objects.all()
                serializer = OrderSerializer(data, many=True)
            return Response(serializer.data)

        def saveOrderItem(self, orderItem, orderId):
            orderItem['orderId'] = orderId
            serializer = OrderItemsSerializer(data=orderItem)
            print(serializer)

            if serializer.is_valid():
                serializer.save()
        
        def post (self, request):
            if not request.data['projects']:
                return JsonResponse("Escolha um projeto!", safe=False, status=400)

            data = request.data
            serializer = OrderSerializer(data=data)
            print(serializer)
            if not serializer.is_valid():
                return JsonResponse ("O cadastro da Order Falhou!", safe=False)

            data = serializer.save()
            orderItems = request.data['projects']


            for item in orderItems:
                self.saveOrderItem(item, data.id)

            return JsonResponse (" Order Cadastrada com Sucesso!", safe=False)


class OrderItemsView(APIView):
    
        def get_order_items(self, pk):
            try:
                orderItems = OrderItems.objects.get(id=pk)
            except OrderItems.DoesNotExist():
                raise Http404
            return orderItems
            
        def get(self, resquest, pk=None):
            if pk:
                data = self.get_order_items(pk)
                serializer = OrderItemsSerializer(data)
            else:
                data = OrderItems.objects.all()
                serializer = OrderItemsSerializer(data, many=True)
            return Response(serializer.data)
