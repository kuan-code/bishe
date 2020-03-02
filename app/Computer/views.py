import json

from flask import render_template, request

from app.Computer.Search_data import Search_list_tree, Search_list, Search_type, Search_compare, Search_QZH
from . import Computer

@Computer.route("/index")
def index():
    return render_template("index.html")

@Computer.route("/search")
def search():
    return render_template("search.html")

@Computer.route("/statistics")
def statistics():
    return render_template("statistics.html")

@Computer.route("/download")
def download():
    return render_template("download.html")

@Computer.route('/search_list')
def search_list():
    wormYear = request.args.get('wormYear')
    wormYear ="year_"+str(wormYear)
    data = Search_list(wormYear)
    jsonstr = json.dumps(data,ensure_ascii=False)
    return jsonstr

@Computer.route('/search_tree')
def search_tree():
    wormYear = request.args.get('wormYear')
    wormYear ="year_"+str(wormYear)
    data = Search_list_tree(wormYear)
    jsonstr = json.dumps(data,ensure_ascii=False)
    return jsonstr

@Computer.route("/search_type")
def search_type():
    type = request.args.get("type")
    type = Search_type(type)
    jsonstr = json.dumps(type,ensure_ascii=False)
    return jsonstr

@Computer.route("/search_compare")
def search_compare():
    type = request.args.get("type")
    name = request.args.get("name")
    result = Search_compare(type,name)
    jsonstr = json.dumps(result,ensure_ascii=False)
    return jsonstr

@Computer.route("/search_QZH")
def search_QZH():
    type = request.args.get("type")
    name = request.args.get("name")
    year = request.args.get("year")
    result = Search_QZH(type,name,year)
    jsonstr = json.dumps(result,ensure_ascii=False)
    return jsonstr