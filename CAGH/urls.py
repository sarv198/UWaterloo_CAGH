from django.urls import path
from django.shortcuts import redirect
from . import views


urlpatterns = [
    # Temporarily redirect home to about page (blog is hidden)
    path('', lambda request: redirect('about'), name='home'),
    
    # Blog URLs (temporarily hidden but code preserved)
    path("blog/", views.home, name="blog-home"),  # Blog moved to /blog/ URL
    path("post/<int:pk>/", views.post_details, name="post-detail"),
    path("post/new/", views.PostCreateView.as_view(), name="post-create"),
    path("post/<int:pk>/edit/", views.PostUpdateView.as_view(), name="post-update"),
    path("post/<int:pk>/delete/", views.PostDeleteView.as_view(), name="post-delete"),
    
    # Main navigation pages
    path("about/", views.about, name="about"),
    path("events/", views.events, name="events"),
    path("involvement/", views.involvement, name="involvement"),
    path("team/", views.team, name="team"),
]