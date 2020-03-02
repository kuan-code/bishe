from flask import request, redirect, url_for

from app import app
from app.tools.CheckMobie import checkMobile


@app.route("/")
def init_load():
    if checkMobile(request):
       return redirect(url_for('Mobile.index_m'))
    else:
       return redirect(url_for('Computer.index'))

if __name__ == "__main__":
    app.run()