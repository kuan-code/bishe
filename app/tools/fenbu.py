with open("./fenbu.txt","r+") as f:
    a = f.readlines()
    s = {}
    s_fenbu={}
    result=[]
    list=[]
    for i in range(a.__len__()):
        list.append(a[i].replace("\n","").split(","))
        b = (a[i].replace("\n","").split(","))
        for j in b[1:]:
            if j not in s.keys():
                s[j]=1
            else:
                s[j]+=1

    for i in s.keys():
        for j in list:
            if i in j:
                if i not in s_fenbu.keys():
                    s_fenbu[i]=[j[0]]
                else:
                    s_fenbu[i].append(j[0])
    for i,j in s_fenbu.items():
        result.append({"name":i,"value":len(j),"fenbu":j})
    print(result)