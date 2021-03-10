from django.forms import ModelForm, TextInput, Select

from .models import User


class UsersForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'group']

        widgets = {
            'username': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your username',
            }),
            'group': Select(attrs={
                'class': 'form-select',
            }),
        }
