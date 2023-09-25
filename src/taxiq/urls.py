"""taxiq URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path
from . import views 
urlpatterns = [
    path('', views.home_view, name='home'),
    path('aide/', views.aide_view, name='aide'),
    path('services/', views.services_view, name='services'),
    path('informations/', views.information_view, name='informations'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('dashbord/', views.dash_view, name='dashbord'),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    #Ne pas lancer en production
    from django.conf.urls.static import static
    #essaye django
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)