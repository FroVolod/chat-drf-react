from django.urls import path

from chat_api.views import MessagesView


urlpatterns = [
    path('chat/', MessagesView.as_view()),
]
