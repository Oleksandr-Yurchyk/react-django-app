from django.db import models
from django.utils import timezone

from groups.models import Group


class User(models.Model):
    username = models.CharField('Username', max_length=50)
    created = models.DateTimeField('Datetime created', auto_now_add=timezone.now())
    group = models.ForeignKey(Group, on_delete=models.PROTECT)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return '/users'

    class Meta:
        verbose_name_plural = 'Users'
