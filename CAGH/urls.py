from django.urls import path, re_path
from . import views
from . import api_views

urlpatterns = [
    # API routes for blog
    path('api/posts/', api_views.PostListCreate.as_view()),
    path('api/posts/<int:pk>/', api_views.PostDetailUpdateDelete.as_view()),

    # React SPA - serve for all frontend routes (client-side routing)
    path('', views.react_spa),
    path('about/', views.react_spa),
    path('events/', views.react_spa),
    path('involvement/', views.react_spa),
    path('team/', views.react_spa),
    path('blog/', views.react_spa),
    path('blog/post/new/', views.react_spa),
    path('blog/post/<int:pk>/', views.react_spa),
    path('blog/post/<int:pk>/edit/', views.react_spa),
    path('blog/post/<int:pk>/delete/', views.react_spa),
]
