from blackjack.models import Game, Player
import random
from typing import List, Optional

def create_game(game_name: str, players: List[str]) -> Game: #Nouvelle instance de Game
    game = Game.objects.create(name=game_name)
    for name in players:
        Player.objects.create(name=name, game=game)
    return game

def get_players(game_id: int) -> Optional[List[Player]]: #Liste des joueurs
    game = Game.objects.get(pk=game_id)
    return list(game.players.all())

def get_winners(game_id: int) -> Optional[List[Player]]: #Filtre les joueurs gagnants et perdants
    game = Game.objects.get(pk=game_id)
    lucky_players = []
    for player in game.players.all():
        if player.score <= 21:
            lucky_players.append(player)
    return lucky_players


def change_score(player_id: int, score: int) -> None: #Modifie le score d'un joueur
    player = Player.objects.get(pk=player_id)
    player.score = score
    player.save()
