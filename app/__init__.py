from flask import Flask

app = Flask(__name__)

app.debug=True

from app.Mobile import Mobile as Mobile_blueprint
from app.Computer import Computer as Computer_blueprint

app.register_blueprint(Mobile_blueprint)
app.register_blueprint(Computer_blueprint)