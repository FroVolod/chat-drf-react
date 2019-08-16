from rest_framework import serializers

from chat_api.models import Message


class MessageGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'user', 'text', 'date')


class MessagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('text',)
