from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='api.Category'),
            preserve_default=False,
        ),
    ]
