from flask import Flask, Blueprint

Computer = Blueprint("Computer",__name__,template_folder="./templates",static_folder="./static")

import  app.Computer.views