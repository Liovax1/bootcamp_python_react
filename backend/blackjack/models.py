from django.db import models

# Create your models here.

class Game(models.Model):
    name = models.CharField(max_length=50)
    turn = models.IntegerField(default =0)
    ended = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Player(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name="players")

    def __str__(self):
        return f"{self.name} (score: {self.score})"
