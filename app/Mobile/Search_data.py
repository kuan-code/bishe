import pymysql

from app.Computer.Search_data import PtoC


def Search_m_list(year):
    conn = pymysql.connect(
        host='localhost',  ##mysql服务器地址
        user='root',  ##用户名
        passwd='123456',  ##密码
        db='test',  ##数据库名
        charset='utf8'  ##连接编码
    )
    cursor = conn.cursor()
    sql = """SELECT Phylum,Class,Order_,Family,Genus,Species FROM `OTU表` WHERE {}<>0""".format(year)
    cursor.execute(sql)
    data = cursor.fetchall()
    result = {}
    for i in data:
        if 'Phylum' not in result:
            result['Phylum'] = []
        else:
            result['Phylum'].append(i[0])
        if 'Class' not in result:
            result['Class'] = []
        else:
            result['Class'].append(i[1])
        if 'Order' not in result:
            result['Order'] = []
        else:
            result['Order'].append(i[2])
        if 'Family' not in result:
            result['Family'] = []
        else:
            result['Family'].append(i[3])
        if 'Genus' not in result:
            result['Genus'] = []
        else:
            result['Genus'].append(i[4])
        if 'Species' not in result:
            result['Species'] = []
        else:
            result['Species'].append(i[5])
    conn.close()
    for i in result.items():
        result[i[0]] = list(set(i[1]))
    return result

def Search_m_tree(year):
        conn = pymysql.connect(
            host='localhost',  ##mysql服务器地址
            user='root',  ##用户名
            passwd='123456',  ##密码
            db='test',  ##数据库名
            charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Phylum FROM `OTU表` WHERE {}<>0""".format(year)
        cursor.execute(sql)
        data = cursor.fetchall()
        Sdict = {"name": "d__Bacteria", "children": [{"name": "k__norank", "children": []}]}
        for i in data:
            p_c = PtoC(i[0], year)
            Sdict["children"][0]["children"].append({"name": i[0], "value": p_c.__len__(), "children": p_c})
        conn.close()
        return Sdict