# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-10-20 23:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('likesbooks', '0002_delete_abc'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Like',
        ),
        migrations.AddField(
            model_name='book',
            name='liked_users',
            field=models.ManyToManyField(related_name='liked_books', to='likesbooks.User'),
        ),
        migrations.AddField(
            model_name='book',
            name='uploader',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, related_name='uploaded_books', to='likesbooks.User'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='book',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='book',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]