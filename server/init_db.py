from apps import db
from apps import app
from apps.models import User


with app.app_context():
    db.create_all()
    print("Database initialized.")
