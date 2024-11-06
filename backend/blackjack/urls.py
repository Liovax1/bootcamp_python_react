from ninja import NinjaAPI
from . import views

api = NinjaAPI()

api.add_router("/game/", views.game_router)
