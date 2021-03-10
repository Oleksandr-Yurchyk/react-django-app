from django.db import models


class Group(models.Model):
    name = models.CharField('Group', max_length=50)
    description = models.CharField('Description', max_length=200)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return '/groups'

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'
