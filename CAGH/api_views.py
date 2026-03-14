from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
