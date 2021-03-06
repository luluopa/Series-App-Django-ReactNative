from rest_framework.serializers import ModelSerializer
from User.models import CustomUser
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token
from Series.serializer import SeriesSerializer

class CustomUserSerializer(ModelSerializer):
    series = SeriesSerializer(many=True, required=False)

    class Meta():
        model = CustomUser
        fields = ['id', 'email', 'username', 'password', 'series']

        extra_kwargs = {
            "password":{
                "write_only":True
            }
        }
        
    #gera token para o usuario
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        customuser = CustomUser.objects.create(**validated_data)
        customuser.save()
        Token.objects.create(user=customuser)
        return customuser