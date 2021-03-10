from django.urls import path

from users import views

urlpatterns = [
    path('api/', views.users_list),
    path('api/<int:pk>', views.users_detail),
]
