from django.urls import include
from api.views import *
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('api/endereços', AddressViewSet)

urlpatterns = router.urls