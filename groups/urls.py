from django.urls import path
from groups import views

urlpatterns = [
    path('api/', views.groups_list),
    path('api/<int:pk>', views.groups_detail),
]
