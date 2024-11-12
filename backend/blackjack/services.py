from blackjack.models import Game, Player
from typing import List

def create_game(game_name: str, players: List[str]):
    game = Game.objects.create(name=game_name)
    for name in players:
        Player.objects.create(name=name, game=game)
    return game

def get_players(game_id: int) :
    game = Game.objects.get(pk=game_id)
    return list(game.players.all())

def get_winners(game_id: int) :
    game = Game.objects.get(pk=game_id)
    lucky_players = []
    for player in game.players.all():
        if player.score <= 21:
            lucky_players.append(player)
    return lucky_players


def change_score(player_id: int, score: int):
    player = Player.objects.get(pk=player_id)
    player.score = score
    player.save()
