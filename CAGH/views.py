from django.shortcuts import render


def react_spa(request):
    """Serve the React SPA for all client-side routes."""
    return render(request, 'CAGH/react_spa.html')
