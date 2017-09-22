from django.contrib import admin

from .models import Song
from .models import Performer


admin.site.register(Song)
admin.site.register(Performer)
