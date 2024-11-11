from ninja import NinjaAPI, ModelSchema, Schema
from blackjack.models import Game, Player
from typing import List
from blackjack.services import create_game

api = NinjaAPI()

class PlayerSchema(ModelSchema):
     class Meta:
        model = Player
        fields = [
            "id",
            "name",
            "score",
        ]
     

class GameSchema(ModelSchema):
     class Meta:
        model = Game
        fields = [
            "id",
            "name",
            "turn",
            "ended",
        ]


class AddGame(Schema):
     name: str
     players: List[str]
     
class UpdateGame(Schema):
     name: str
     players: List[str]


@api.post("/create_game", response=GameSchema)
def add(request, game: AddGame):
    new_game = create_game(game.name, game.players)
    return new_game

@api.get("/game/{id}", response=GameSchema)
def get(request, game_id: int):
    current_game = Game.objects.get(pk=game_id)
    return current_game

@api.delete("/delete_game/{id}")
def delete(request, game_id:int):
     delete_game = Game.objects.get(pk=game_id)
     delete_game.delete()
     return delete_game

@api.put("/update_game/{game_id}")
def update(request, game_id: int, data: UpdateGame):
    game = Game.objects.get(pk=game_id)
    game.name = data.name
    game.save()
    return game

@api.get("/game/{game_id}/players", response=list[PlayerSchema])
def get_players(request, game_id: int):
    players = Player.objects.filter(game_id=game_id)
    return players