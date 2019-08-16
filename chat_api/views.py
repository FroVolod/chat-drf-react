from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib.auth.models import User

from chat_api.models import Message
from chat_api.serializers import MessageGetSerializer, MessagePostSerializer


class MessagesView(APIView):

    def get(self, request):
        messages = Message.objects.all().order_by('date')
        serializer = MessageGetSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request):
        new_message = MessagePostSerializer(data=request.data)
        user = User.objects.get(id=1)
        if new_message.is_valid():
            new_message.save(user=user)
            return Response({'status': 'Added'})
        return Response({'status': 'Error'})
