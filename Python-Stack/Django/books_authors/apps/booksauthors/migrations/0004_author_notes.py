# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-20 22:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booksauthors', '0003_auto_20181020_2158'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
