# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-24 23:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Menus', '0003_menuitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]