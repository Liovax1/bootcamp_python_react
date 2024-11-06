from django.shortcuts import render

from ninja import Router
from .models import Game, Player
from .services import create_game

game_router = Router()

@game_router.post("/create")
def create_new_game(request, game_name: str, players: list[str]):
    return create_game(game_name, players)



