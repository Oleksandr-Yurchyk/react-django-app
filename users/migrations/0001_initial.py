# Generated by Django 3.1.7 on 2021-03-08 21:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name='Username')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Datetime created')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='groups.group')),
            ],
            options={
                'verbose_name_plural': 'Users',
            },
        ),
    ]
