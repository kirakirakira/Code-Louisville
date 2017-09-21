from django.shortcuts import get_object_or_404, render

from .models import Song, Performer


def song_list(request):
    songs = Song.objects.all()
    return render(request, 'songs/song_list.html', {'songs': songs})


def song_detail(request, pk):
    song = get_object_or_404(Song, pk=pk)
    return render(request, 'songs/song_detail.html', {'song': song})


def performer_detail(request, song_pk):
    request = get_object_or_404(Song, song_id=song_pk)
    return render(request, 'songs/performer_detail', {})

# * Views:
#   * list view, all of the songs
#   * detail view, a particular song
#     * tell who's performing it
#   * performer view, a particular performer
#     * list all of their songs
