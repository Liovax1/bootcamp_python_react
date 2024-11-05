from ninja import NinjaAPI, ModelSchema, Schema
from polls.models import Choice, Question
from django.utils import timezone
from blackjack.services import create_game
api = NinjaAPI()
from blackjack.models import Player, Game




class ChoiceSchema(ModelSchema):
    class Meta:
        model = Choice
        fields = [
        "id",
        "choice_text",
        "votes",
        ]

class QuestionSchema(ModelSchema):
    class Meta:
        model = Question
        fields = [
            "id",
            "question_text",
            "pub_date",
        ]


class AddQuestionSchema(Schema):
    choices: list[str]

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
        ]


@api.post("/create_question", response=QuestionSchema)
def add(request, add_question: AddQuestionSchema):
    question = Question.objects.create(
        question_text=add_question.question_text, pub_date=timezone.now()

    )
    for choice in add_question.choices:
        choice
    return question

@api.get("/question/{id}", response=QuestionSchema)
def get(request, question_id: int):
    return Question.objects.get(pk=question_id)

@api.get("/game/{id}", response=GameSchema)
def get(request, game_id: int):
    return Game.objects.get(pk=game_id)