import json

from flask import render_template, request

from app.Mobile.Search_data import Search_m_list, Search_m_tree
from . import Mobile



@Mobile.route("/index_m")
def index_m():
    return render_template('index_m.html')


@Mobile.route("/search_m")
def search_m():
    return render_template('search_m.html')

@Mobile.route("/statistics_m")
def statistics_m():
    return render_template('statistics_m.html')

@Mobile.route("/search_m_list")
def search_m_list():
    wormyear = request.args.get("wormYear")
    wormYear ="year_"+str(wormyear)
    result = Search_m_list(wormYear)
    jsonstr = json.dumps(result,ensure_ascii=False)
    return jsonstr

@Mobile.route("/search_m_tree")
def search_m_tree():
    wormyear = request.args.get("wormYear")
    wormYear ="year_"+str(wormyear)
    result = Search_m_tree(wormYear)
    jsonstr = json.dumps(result,ensure_ascii=False)
    return jsonstr