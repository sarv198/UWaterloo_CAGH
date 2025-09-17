from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path("post/<int:pk>/", views.post_details, name="post-detail"),
    path("post/new/", views.PostCreateView.as_view(), name="post-create"),
    path("post/<int:pk>/edit/", views.PostUpdateView.as_view(), name="post-update"),
    path("post/<int:pk>/delete/", views.PostDeleteView.as_view(), name="post-delete"),
    path("about/", views.about, name="about"),
    path("events/", views.events, name="events"),
    path("involvement/", views.involvement, name="involvement"),
    path("team/", views.team, name="team"),
]