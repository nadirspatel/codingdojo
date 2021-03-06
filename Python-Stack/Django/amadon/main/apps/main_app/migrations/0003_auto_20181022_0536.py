# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-22 05:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_auto_20181019_1718'),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('creater_id', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='main_app.User')),
            ],
        ),
        migrations.RemoveField(
            model_name='job',
            name='user',
        ),
        migrations.DeleteModel(
            name='Job',
        ),
    ]
