# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-20 22:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booksauthors', '0005_auto_20181020_2209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='notes',
            field=models.TextField(max_length=500),
        ),
    ]
