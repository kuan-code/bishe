import pymysql

def Search_list(year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
            )
        cursor = conn.cursor()
        sql="""SELECT Phylum,Class,Order_,Family,Genus,Species FROM `OTU表` WHERE {}<>0""".format(year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result={}
        for i in data:
                if 'Phylum' not in result:
                       result['Phylum']=[]
                else:
                        result['Phylum'].append(i[0])
                if 'Class' not in result:
                       result['Class']=[]
                else:
                        result['Class'].append(i[1])
                if 'Order' not in result:
                       result['Order']=[]
                else:
                        result['Order'].append(i[2])
                if 'Family' not in result:
                       result['Family']=[]
                else:
                        result['Family'].append(i[3])
                if 'Genus' not in result:
                       result['Genus']=[]
                else:
                        result['Genus'].append(i[4])
                if 'Species' not in result:
                       result['Species']=[]
                else:
                        result['Species'].append(i[5])
        conn.close()
        for i in result.items():
                result[i[0]]=list(set(i[1]))
        return result

def GtoS(p, c, o, f,g, year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Species FROM `OTU表` WHERE Phylum='{}' and Class='{}' and Order_='{}' and Family='{}' and Genus='{}' and {}<>0""".format(
                p, c, o, f, g,year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
                result.append({"name": i[0],"value":data.__len__()})
        # print(result)
        conn.close()
        return result



def FtoG(p, c, o,f,year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Genus FROM `OTU表` WHERE Phylum='{}' and Class='{}' and Order_='{}' and Family='{}' and {}<>0""".format(
                p, c, o,f, year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
                g_s = GtoS(p,c,o,f,i[0],year)
                result.append({"name": i[0],'value':g_s.__len__(),"children":g_s})
        # print(result)
        conn.close()
        return result





def OtoF(p,c,o,year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Family FROM `OTU表` WHERE Phylum='{}' and Class='{}' and Order_='{}' and {}<>0""".format(p,c,o,year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
                f_g=FtoG(p,c,o,i[0],year)
                result.append({"name": i[0],"value":f_g.__len__(),"children":f_g})
        # print(result)
        conn.close()
        return result





def CtoO(p,c,year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Order_ FROM `OTU表` WHERE Phylum='{}' and Class='{}' and {}<>0""".format(p,c,year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
                o_f=OtoF(p,c,i[0],year)
                result.append({"name": i[0],"value":o_f.__len__(), "children": o_f})
        conn.close()
        return result
# CtoO('p__Proteobacteria','c__Gammaproteobacteria','year_1')



def PtoC(Phylum, year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT Class FROM `OTU表` WHERE Phylum='{}' and {}<>0""".format(Phylum, year)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
            c_o= CtoO(Phylum,i[0],year)
            result.append({"name": i[0],"value":c_o.__len__(), "children":c_o,"lable":{'mcHereShow':True}})
        # print(result)
        conn.close()
        return result



def Search_list_tree(year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
            )
        cursor = conn.cursor()
        sql="""SELECT DISTINCT Phylum FROM `OTU表` WHERE {}<>0""".format(year)
        cursor.execute(sql)
        data = cursor.fetchall()
        Sdict={"name":"d__Bacteria","children":[{"name":"k__norank","children":[]}]}
        for i in data:
            p_c = PtoC(i[0],year)
            Sdict["children"][0]["children"].append({"name":i[0],"value":p_c.__len__(),"children":p_c})
        conn.close()
        return Sdict


def Search_type(type):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT DISTINCT {} From `OTU表`""".format(type)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = []
        for i in data:
                result.append(i[0])
        return result


# 查询1-7龄的比较结果
def Search_compare(type, name):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT SUM(year_1),SUM(year_2),SUM(year_3),SUM(year_4),SUM(year_5),SUM(year_6),SUM(year_7) FROM `OTU表` WHERE {}='{}'""".format(
                type, name)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = list(data[0])
        # print(list(data[0]))
        conn.close()
        return result


# 查询5-6龄前中后期的结果
def Search_QZH(type, name, year):
        conn = pymysql.connect(
                host='localhost',  ##mysql服务器地址
                user='root',  ##用户名
                passwd='123456',  ##密码
                db='test',  ##数据库名
                charset='utf8'  ##连接编码
        )
        cursor = conn.cursor()
        sql = """SELECT SUM({0}_Q_1)+Sum({1}_Q_2)+Sum({2}_Q_3) as SUM_Q,SUM({3}_Z_1)+Sum({4}_Z_2)+Sum({5}_Z_3) as SUM_Z,SUM({6}_H_1)+Sum({7}_H_2)+Sum({8}_H_3) as SUM_H FROM `OTU_QZH` WHERE {9}='{10}'""".format(
                year, year, year, year, year, year, year, year, year, type, name)
        cursor.execute(sql)
        data = cursor.fetchall()
        result = list(data[0])
        # print(result)
        conn.close()
        return result


