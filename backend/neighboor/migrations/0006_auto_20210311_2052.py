# Generated by Django 3.1 on 2021-03-12 01:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('neighboor', '0005_ticket_store'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticket',
            old_name='person',
            new_name='helpee',
        ),
    ]