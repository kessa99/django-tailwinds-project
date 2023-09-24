from django.shortcuts import render

def home_view(request):
    return render(request, "home.html", {})

def services_view(request):
    return render(request, "services.html", {})

def information_view(request):
    return render(request, "informations.html", {})

def aide_view(request):
    return render(request, "aide.html", {})

def login_view(request):
    return render(request, "login.html", {})


