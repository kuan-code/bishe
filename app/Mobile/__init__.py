from flask import Flask,Blueprint

Mobile = Blueprint("Mobile",__name__,template_folder='./templates',static_folder='./static')


import app.Mobile.views