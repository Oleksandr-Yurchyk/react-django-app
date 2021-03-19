from django.urls import path
from groups import views

urlpatterns = [
    path('', views.groups_list),
    path('<int:pk>', views.groups_detail),
]
